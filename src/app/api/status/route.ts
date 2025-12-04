import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../generated/prisma";
import fs from 'fs'
import path from "path";

// types

import { StatusesType } from "@/types/type";

// utils

import { uploadNewFile } from "@/utils/uploadNewFile";



const prisma = new PrismaClient()

// 



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
    const total = formData.get('total') as string
    const price = formData.get('price') as string

    //


    console.log('TOTAL ', total)


    const newFile = await uploadNewFile(icon, 'status')



    const newStatus = await prisma.statuses.create({
      data: {
        title: title,
        icon: newFile as any,
        total: Number(total) as number,
        price: price
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