import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../../generated/prisma";

// 

import path from "path";
import fs from "fs";

//

const prisma = new PrismaClient()



const deleteImage = async (filename: string) => {
  try {

    const uploadDir = path.join(process.cwd(), 'src', 'app', 'uploads', 'mineralMap')
    console.log(uploadDir)

    if (!fs.existsSync(uploadDir)) {
      throw new Error('Папка не существует')
    }

    fs.unlinkSync(path.join(uploadDir, filename))
    return `Изображение ${filename} удалено`

  } catch (error) {
    console.error(error)
    throw new Error('Ошибка при удалении изображения')
  }
}



export const DELETE = async (req: Request, context: {params: {id: string}}) => {
  try {

    const { id } = await context.params

    const getMineralMap = await prisma.mineralMap.findFirst({
      where: {
        id: parseInt(id)
      }
    })

    if (!getMineralMap) {
      NextResponse.json({
        message: `Минерал с id ${id} не найден`,
        status: 404
      })
    }

    console.log(getMineralMap)

    const imageName = getMineralMap?.image?.split('/').slice(-1).join('') as string
    console.log(imageName)

    await prisma.mineralMap.delete({
      where: {
        id: parseInt(id)
      }
    })

    await deleteImage(imageName)
    
    return NextResponse.json({
      message: `Минерал с id ${id} удален`,
      status: 200
    })

    
  } catch (error: Error | unknown) {
        if (error instanceof Error) {
      NextResponse.json({
        message: `Ошибка удаления минерала с карты: ${error.message}`,
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