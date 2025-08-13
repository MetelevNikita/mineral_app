import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";


// 


export const GET = async (req: Request) => {
    try {

        console.log(process.cwd())

        const pathVideo = path.join(process.cwd(), '/public/video/test.mp4');

        console.log(pathVideo)

        const video = fs.readFileSync(pathVideo)

        console.log(video)

        console.log(video)
        return NextResponse.json({
            video
        })

        
        
    } catch (error: Error | unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({error})
    }
}