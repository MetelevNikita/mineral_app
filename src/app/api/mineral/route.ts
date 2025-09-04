import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../generated/prisma";

import fs from 'fs'
import fsPromices from 'fs/promises'
import path from 'path'
import { transliterate } from 'transliteration'

// 

const prisma = new PrismaClient()



export const GET = async () => {
    try {

        const allMineral = await prisma.mineral.findMany({
            include: {
                question: {
                    include: {
                        answers: true
                    }
                }
            }
        })

        if (allMineral.length < 1) {
            return NextResponse.json([])
        }

        return NextResponse.json(allMineral)


        
    } catch (error: Error | unknown) {
        if (error instanceof Error) {
            return NextResponse.json({message: error.message})
        }
        
    }
}



export const POST = async (req: Request, res: Response) => {
    try {

        const formData = await req.formData()


        const title = formData.get('title') as string;
        const description = formData.get('description') as string;
        let video = formData.get('video') as File;
        let image = formData.get('image') as File



        const mineralFolderTitle =  title.trim()


        // upload

        const uploadFolder = path.resolve(process.cwd(), 'public', 'uploads', 'mineral');
        const latinText = transliterate(mineralFolderTitle);
        console.log(latinText)

    
        // image
        const currentWriteFolder = uploadFolder + '/' + latinText
        fs.mkdirSync(currentWriteFolder, {recursive: true})


        // 

        const filename = image.name
        const buffer = await image.arrayBuffer();
        const fileBuffer = Buffer.from(buffer);
        fsPromices.writeFile(currentWriteFolder + '/' + filename, fileBuffer)


        // video
        const videoName = video.name
        const vBuffer = await video.arrayBuffer()
        const videoBuffer = Buffer.from(vBuffer)

        // 

        const uploadPath = path.join(currentWriteFolder, videoName);
        const writeStream = fs.createWriteStream(uploadPath);


        writeStream.write(videoBuffer, (err) => {
            if (err) {
                console.error('Ошибка записи файла:', err);
            }
            console.log('Видео успешно загружено');
        });

        writeStream.end();





        const newMineral = await prisma.mineral.create({
            data: {
                title,
                description,
                video: (video) ? `/uploads/mineral/${latinText}/${videoName}` : '',
                image: (image) ? `/uploads/mineral/${latinText}/${filename}` : ''
            },

            include: {
                question: true
            }
        })


        console.log(newMineral)


        if (!newMineral) {
            return NextResponse.json({message: `Ошибка добавления минерала`})
        }

        return NextResponse.json({message: `Новый минерал создан`})

        
    } catch (error: Error | unknown) {
        if (error instanceof Error) {
            return NextResponse.json({error: error.message})
        }
        return NextResponse.json({error: error})  
    }
}


