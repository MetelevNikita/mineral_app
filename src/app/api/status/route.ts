import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../generated/prisma";
import fs from 'fs'
import path from "path";

// types

import { StatusesType } from "@/types/type";


const prisma = new PrismaClient()

// 




const uploadFileFn = async (url: any, file: File, pathFile: string) => {

  try {

    const fileUrl = new URL(url.url)
    console.log(fileUrl)

    const bufferFile = await file.arrayBuffer()
    const fileBuffer = Buffer.from(bufferFile)

    const pathJoin = path.join(pathFile, file.name)

    await fs.promises.writeFile(pathJoin, fileBuffer)
    console.log(`Файл ${file.name} успешно загружен`)


    return fileUrl.origin

    

  } catch (error: Error | unknown) {
    if (error instanceof Error) {
      console.error(`Ошибка загрузки файла ${file.name}: ${error.message}`)
      return NextResponse.json({
        error: error.message
      })
    }
  }
}



export const GET = async (): Promise<NextResponse<StatusesType[] | [] | {error: string}>> => {
  try {

    const statuses = await prisma.statuses.findMany()

    if (!statuses || statuses.length < 1) {
      console.error('Статусы не найдены')
      return NextResponse.json([])
    }
    return NextResponse.json(statuses)
    
  } catch (error: Error | unknown) {

    if (error instanceof Error) {
      console.error(`Ошибка получения дынных статуса: ${error.message}`)
      return NextResponse.json({
        error: error.message
      })
    }
    // Handle unknown errors
    console.error('Неизвестная ошибка получения статуса', error)
    return NextResponse.json({
      error: 'Неизвестная ошибка получения статуса'
    })
  }
} 



export const POST = async (req: Request) => {
  try {

    const formData = await req.formData()

    const title = formData.get('title') as string
    const icon = formData.get('icon') as File
    const price = formData.get('price') as string

    // 

    const statusFilePath = path.join(process.cwd(), 'public', 'uploads', 'status')

    const url = await uploadFileFn(req, icon, statusFilePath)
    console.log(url)



    const newStatus = await prisma.statuses.create({
      data: {
        title: title,
        icon: url + '/uploads/status/' + icon.name,
        price: ''
      }
    })

    if (!newStatus) {
      console.error(
        `Статус ${title} не был добавлен`
      )
      return NextResponse.json({
        error: `Статус ${title} не был добавлен`
      })
    }

    return NextResponse.json({
      message: 'Статус успешно добавлен',
    })
    
  } catch (error: Error | unknown) {
    if (error instanceof Error) {
      console.error(`Ошибка добавления статуса: ${error.message}`)
      return NextResponse.json({
        error: error.message
      })
    }
  }
}