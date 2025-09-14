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


    if (ext === ".mp4") {
      const stat = fs.statSync(path.join(folderPath, filename));
      const fileSize = stat.size;

      const isMedia = contentType.startsWith("video/") || contentType.startsWith("audio/")

        const range = req.headers.get("range");
        if (isMedia && range) {
        const match = range.match(/bytes=(\d*)-(\d*)/);

        if (!match) {
          return new NextResponse("Invalid Range", {
            status: 400,
          })
        }
        
        let start = match[1] ? parseInt(match[1], 10) : 0;
        let end = match[2] ? parseInt(match[2], 10) : fileSize - 1;
        const chunkSize = end - start + 1;
        const stream = fs.createReadStream(path.join(folderPath, filename), { start, end });

        return new NextResponse(stream as any, {
            status: 206,
            headers: {
              "Content-Type": contentType,
              "Content-Length": String(chunkSize),
              "Content-Range": `bytes ${start}-${end}/${fileSize}`,
              "Accept-Ranges": "bytes",
              "Cache-Control": "public, max-age=31536000, immutable",
              "X-Content-Type-Options": "nosniff",
            },
          });
      }
    }


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