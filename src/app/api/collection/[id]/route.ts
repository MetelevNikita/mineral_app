
import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../../generated/prisma";
import fs from "fs"
import path from "path"

// 

import { deleteCurrentFile } from "@/utils/deleteCurrentFile";
import { uploadNewFile } from "@/utils/uploadNewFile";

// 

const prisma = new PrismaClient()

// 

export const DELETE = async (request: Request, context: {params: {id: string}}) => {
  try {


    const { id } = await context.params
    const getCollectionMineral = await prisma.collectionMineral.findFirst({
      where: {
        id: Number(id)
      }
    })

    // 

    const deleteIcon = await deleteCurrentFile(getCollectionMineral?.image as string, 'collections')


    // 

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
    const formData = await request.formData()

    const title = formData.get('title')
    const image = formData.get('image')







    const getMineral = await prisma.collectionMineral.findFirst({
      where: {
        id: Number(id)
      }
    })


    if (!getMineral) {
      return NextResponse.json({
        message: `Минерал для обновления с id ${id} не найден`
      })
    }


    // 


    // const deleteCollectionIcon = await deleteCurrentFile(getMineral.image, 'collections')
    // const uploadCollectionIcon = await uploadNewFile(image as File, 'collections')


    // 


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