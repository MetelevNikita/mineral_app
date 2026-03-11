import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../generated/prisma";
import path from "path";
import fs from "fs";

// utils

import { uploadNewFile } from "@/utils/uploadNewFile";
import { deleteCurrentFile } from "@/utils/deleteCurrentFile";


// 

const prisma = new PrismaClient()


// 


export const GET = async () => {
  try {

    const contacts = await prisma.contacts.findMany()

    if (!contacts) {
      return NextResponse.json([])
    }

    return NextResponse.json(contacts)
    
  } catch (error: Error | unknown) {
    
    if (error instanceof Error) {
      NextResponse.json({
        message: `Не удалось раздел контактов ${error.message}`
      })
    }

    NextResponse.json({
      message: `Не удалось раздел контактов ${error}`
    })
  }
}



export const PATCH  = async (req: Request) => {


  const newUrl = new URL(req.url)



  try {

    const formData = await req.formData()

    // 


    const adress = formData.get('adress') as string
    const events = formData.get('events') as string
    const laboratory = formData.get('laboratory') as string
    const news = formData.get('news') as string
    const path = formData.get('path') as string
    const way = formData.get('way') as File

    // 


    const newOBject: any = {}

    const getContacts = await prisma.contacts.findFirst({
      where: {
        id: 1
      }
    })


    if (adress) {
      newOBject['adress'] = adress
    }

    if (events) {
      newOBject['events'] = events
    }

    if (laboratory) {
      newOBject['laboratory'] = laboratory
    }

    if (news) {
      newOBject['news'] = news
    }


    if (path) {
      newOBject['path'] = path
    }

    if (way) {


      

      if (getContacts) {
        const filename = await uploadNewFile(way, 'contacts')
        await deleteCurrentFile(getContacts.way as string, 'contacts')
        newOBject['way'] = filename
      } else {
        const filename = await uploadNewFile(way, 'contacts')
        newOBject['way'] = filename
      }


    }





    if (!getContacts) {
        const createContacts = await prisma.contacts.create({
          data: newOBject
        })



    return NextResponse.json({
      message: 'Данные успешно созданы',
      data: createContacts
    })

    } else {
        const createContacts = await prisma.contacts.update({
          where: {
            id: 1
          },
          data: newOBject
      })



    return NextResponse.json({
      message: 'Данные успешно добавлены',
      data: createContacts
    })
    }


     

  } catch (error: Error | unknown) {
    
    if (error instanceof Error) {
      NextResponse.json({
        message: `Не удалось раздел контактов ${error.message}`
      })
    }

    NextResponse.json({
      message: `Не удалось раздел контактов ${error}`
    })
  }
}