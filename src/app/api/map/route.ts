import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../generated/prisma";

// 

import path from "path";
import fs from "fs";

//



const saveImageToUpload = async (image: File, folderName: string) => {
  try {

    if (image) {
      
      // 

      const name = image.name.split(".").slice(0, -1).join(".") +  "_" + Date.now() + "." + image.name.split(".").slice(-1)[0]

      console.log(name)

      // 
      const uploadDir = path.join(process.cwd(), "src", "app", "uploads", folderName)

      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true })
      }


      const BufferImage = await image.arrayBuffer()
      const fileBuffer = Buffer.from(BufferImage)

      fs.writeFileSync(
        path.join(uploadDir, name), fileBuffer,
      )

      return '/api/uploads/' + folderName + '/' + name

    }
    
  } catch (error) {
    console.error(`Ошибка сохранения изображения: ${error}`)
    throw new Error(
      `Ошибка сохранения изображения: ${error}`
    )
  }
}





const prisma = new PrismaClient()

export const GET = async () => {
  try {

    const mineralMap = await prisma.mineralMap.findMany()

    if (mineralMap.length < 0) {
      return NextResponse.json({
        message: "Карта минералов пуста",
        status: 404
      })
    }

    return NextResponse.json(
      mineralMap
    )
    
  } catch (error: Error | unknown) {

    if (error instanceof Error) {
      NextResponse.json({
        message: `Ошибка получения минералов с карты: ${error.message}`,
        status: 500
      })
    }

    NextResponse.json({
      error: {
        message: "Неизвестная ошибка",
        code: 500,
      }
    })
    
  }
} 





export const POST = async (req: Request) => {
  try {

    const formData = await req.formData()

    const title = formData.get("title") as string
    const description = formData.get("description") as string
    const image = formData.get("image") as File

    // 

    if (!title || !description || !image) {
      NextResponse.json({
        message: "Все поля должны быть заполнены",
        status: 400
      })
    }

    // 

    const urlImage = await saveImageToUpload(image, "mineralMap")
    console.log(urlImage)

    const newMineralMap = await prisma.mineralMap.create({
      data: {
        title,
        description,
        image: urlImage
      }
    })

    if (!newMineralMap) {
      NextResponse.json({
        message: "Ошибка добавления минерала",
        status: 500
      })
    }
    
    return NextResponse.json({
      message: `Новый минерал в коллекция ${title} добавлен`
    })





    
  } catch (error: Error | unknown) {
    if (error instanceof Error) {
      NextResponse.json({
        message: `Ошибка получения минералов с карты: ${error.message}`,
        status: 500
      })
    }

    NextResponse.json({
      error: {
        message: "Неизвестная ошибка",
        code: 500,
      }
    })
  }
}