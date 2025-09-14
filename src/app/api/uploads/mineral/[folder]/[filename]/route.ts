import { NextResponse, NextRequest } from "next/server";
import fs from "fs";
import path from "path";


export const dynamic = "force-dynamic"; 
export const runtime = "nodejs";    

export const GET = async (req: NextRequest, { params }: {params: {folder: string, filename: string}}) => {
  try {


    const { folder, filename } = await params;


    const folderPath = path.join(process.cwd(), "src", "app", "uploads", 'mineral', folder);
    console.log(folderPath)


    if (!fs.existsSync(folderPath)) {
      return NextResponse.json({
        error: {
          message: "Folder not found",
        },
      })
    }

    const file = fs.readFileSync(path.join(folderPath, filename));

    if (!file) {
      return NextResponse.json({
        error: {
          message: "File not found",
        },
      })
    }


    const ext = path.extname(filename).toLowerCase();
    let contentType = "application/octet-stream";
    if (ext === ".png") contentType = "image/png";
    if (ext === ".jpg" || ext === ".jpeg") contentType = "image/jpeg";
    if (ext === ".gif") contentType = "image/gif";
    if (ext === ".webp") contentType = "image/webp";
    if (ext === ".mp4") contentType = "video/mp4";


    console.log(ext)


    return new NextResponse(file, {
          status: 200,
          headers: {
            "Content-Type": contentType,
          },
        });


    
  } catch (error: Error | unknown) {
    if (error instanceof Error) {
      if (error.message === "Not Found") {
        return NextResponse.json({ error: "Not Found" }, { status: 404 });
      } else {
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
    }
  }
} 