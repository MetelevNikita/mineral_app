import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../../generated/prisma";
import fs from 'fs'
import path from "path";

// types

import { StatusesType } from "@/types/type";


const prisma = new PrismaClient()

// 


export const DELETE = async (req: Request, context: {params: {id: string}}) => {

  try {
    const { id } = await context.params

    console.log(id)

    const getStatus = await prisma.statuses.findFirst({
      where: {
        id: parseInt(id)
      }
    })

    console.log(getStatus)

    if (!getStatus) {
      return NextResponse.json({
        message: 'Статус не найден'
      })
    }


    const deleteFile = await prisma.statuses.delete({
      where: {
        id: parseInt(id)
      }
    })

    if (!deleteFile) {
      console.error('файл не удален')
    }


    const filePath = path.join(process.cwd(), 'public', getStatus.icon)

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath)
    } else {
      console.log('Файл не найден, пропускаем удаление')
    }



    return NextResponse.json({
      message: 'Статус удален',
    })

    
  } catch (error: Error | unknown) {

    if (error instanceof Error) {
      return NextResponse.json({
        error: `Статус не удален: ${error.message}`
      })
    }

    NextResponse.json({error: error})
    
    
  }

}