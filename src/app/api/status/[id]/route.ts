import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../../generated/prisma";
import fs from 'fs'
import path from "path";

// utils

import { uploadNewFile } from "@/utils/uploadNewFile";
import { deleteCurrentFile } from "@/utils/deleteCurrentFile";

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



    // 


    const deleteFileIcon = await deleteCurrentFile(getStatus.icon, 'status')
    console.log(deleteFileIcon)



    // 


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

    return NextResponse.json({error: error})
    
    
  }

}



export const PATCH = async (req: Request, context: {params: {id: string}}) => {
  try {

    const { id } = await context.params
    console.log(id)


    const formData = await req.formData()
    console.log(formData)

    const title = formData.get('title')
    const icon = formData.get('icon')
    const total = formData.get('total')
    const price = formData.get('price')


    // 


    const currentStatus = await prisma.statuses.findFirst({
      where: {
        id: parseInt(id)
      }
    })

    if (!currentStatus) {
      return NextResponse.json({
        message: 'Статус не найден'
      })
    }



    const changeObj: any = {}


    if (title) {
      changeObj['title'] = formData.get('title') as string
    }

    if (icon) {

      const res = await uploadNewFile(icon as File | any, 'status')
      console.log(res)

      changeObj['icon'] = res

      const deleteFile = await deleteCurrentFile(currentStatus.icon, 'status')
      console.log("ФАЙЛ УДАЛЕН!!!! ", deleteFile)


    }

    if (total) {
      changeObj['total'] = Number(formData.get('total'))
    }

    if (price) {
      changeObj['price'] = formData.get('price') as string
    }



    console.log(changeObj)

    console.log('START UPDATE!!!!!!!!')

    const updateStatus = await prisma.statuses.update({
      where: {
        id: parseInt(id)
      },
      data: changeObj
    })


    console.log(updateStatus)

    if (!updateStatus) {
      return NextResponse.json({
        message: 'Ошибка обновления статуса'
      })
    }

    return NextResponse.json({
      message: 'Статус изменен',
    })
    
  } catch (error: Error | unknown) {

    if (error instanceof Error) {
      return NextResponse.json({
        error: `Статус не изменен: ${error.message}`
      })
    }

    return NextResponse.json({error: error})
    
    
  }
}