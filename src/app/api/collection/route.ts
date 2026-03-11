import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../generated/prisma";
import fs from "fs"
import path from "path"

// utils

import { uploadNewFile } from "@/utils/uploadNewFile";

// 


const prisma = new PrismaClient()


export const GET = async () => {
  try {

    const allCollcetions = await prisma.collectionMineral.findMany()

    if (!allCollcetions || allCollcetions.length < 1) {
      return NextResponse.json([])
    }

    return NextResponse.json(allCollcetions)

    
  } catch (error: Error | unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message })
    }

    return NextResponse.json({error})
    
  }
}


// 


export const POST = async (request: Request) => {
  try {

    const url = new URL(request.url)
  
    const formData = await request.formData()

    // 

    const title = formData.get('title') as string
    const image = formData.get('image') as File


    //

    const newFile = await uploadNewFile(image, 'collections') as string

    // 

    const getMineral = await prisma.collectionMineral.findFirst({
      where: {
        title: title
      }
    })

    if (getMineral) {
      return NextResponse.json({
        message: "Коллекция с таким названием уже существует"
      })
    }

    // file

    const newCollectionMineral = await prisma.collectionMineral.create({
      data: {
            title: title,
            image: newFile,
          }
      
    })

    

    if (!newCollectionMineral) {
      return NextResponse.json({
        message: "Ошибка получения нового минерала в коллекцию",
      })
    }


    return NextResponse.json({
      message: `Новый минерал в коллекция ${title} добавлен`,
    })


  } catch (error: Error | unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message })
    }

    return NextResponse.json({error})
    
  }
}