
import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../../generated/prisma";
import fs from "fs"
import path from "path"

// 

const prisma = new PrismaClient()

// 

export const DELETE = async (request: Request, context: {params: {id: string}}) => {
  try {


    const collectionPath = path.join(process.cwd(), 'public', 'uploads' ,'collections')

    const { id } = await context.params
    console.log(id)

    // delete image from storage



    const getCollectionMineral = await prisma.collectionMineral.findFirst({
      where: {
        id: Number(id)
      }
    })

    console.log(getCollectionMineral)


    const urlPars = path.parse(getCollectionMineral?.image as string)
    console.log(urlPars.base)

    await fs.promises.rm(path.join(collectionPath, urlPars.base)), {
      recursive: true,
      force: true
    }

    console.log(`Изображение ${urlPars.base} удалено из базы`)

    

    const deleteCollectionMineral = await prisma.collectionMineral.delete({
      where: {
        id: Number(id)
      }
    })

    if (!deleteCollectionMineral) {
      return NextResponse.json({
        message: `Минерал с id ${id} не найден`
      })
    }

    return NextResponse.json({
      message: `Минерал с id ${id} удален`
    })
    
  } catch (error: Error | unknown) {
    if (error instanceof Error) {
      return NextResponse.json({error: error.message})
    }

    return NextResponse.json(error)
    
  }
}


export const PATCH = async (request: Request, context: {params: {id: string}}) => {
  try {

    const { id } = await context.params
    console.log(id)


    const body = await request.json()
    console.log(body)


    const getMineral = await prisma.collectionMineral.findFirst({
      where: {
        id: Number(id)
      }
    })

    console.log(getMineral)

    if (!getMineral) {
      NextResponse.json({
        message: `Минерал для обновления с id ${id} не найден`
      })
    }


    const updateMineral = await prisma.collectionMineral.update({
      where: {
        id: Number(id)
      },
      data: {
        received: true
      }
    })

    if (!updateMineral) {
      NextResponse.json({
        message: `Не удалось обновить статус в коллекции минералов`
      })
    }



    return NextResponse.json({
      message: 'done'
    })




    
  } catch (error: Error | unknown) {
    if (error instanceof Error) {
      NextResponse.json({message: `Не удалось обновить статус в коллекции минералов ${error.message}`})
    }

    return NextResponse.json(error)
  }
}