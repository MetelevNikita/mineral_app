import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../generated/prisma";
import path from "path";
import fs from "fs";

// 

const prisma = new PrismaClient()

//


const uploadFile = async (file: File, url: any) => {



  const fileName = file.name
  console.log(fileName)

  const fileBuffer = await file.arrayBuffer()
  const fileData = Buffer.from(fileBuffer)


  const filePath = path.join(process.cwd(), 'src', 'app', 'uploads', 'contacts')

  if (!fs.existsSync(filePath)) {
      fs.mkdirSync(filePath, { recursive: true })
  }


  const data = fs.writeFileSync(path.join(filePath, fileName), fileData)

  return `${url.protocol}//${url.host}/api/uploads/contacts/${fileName}`



}


const deleteFile = async (filename: any, url: any) => {

  try {

    const oldFile = filename.way.split('/').pop() as string
    console.log(oldFile)

    const deleteFile = fs.unlinkSync(path.join(process.cwd(), 'src', 'app', 'uploads', 'contacts', oldFile))
    return {
      file: deleteFile,
      status: 'deleted'
    }

    
  } catch (error) {
    console.log(error)
  }

}


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

      if (getContacts?.way) {
        const deleteFileData = await deleteFile(getContacts, newUrl)
        console.log('старый файл удален')
      }

      const filename = await uploadFile(way, newUrl)

      newOBject['way'] = filename
    }





    if (!getContacts) {

        console.log('Создаем')

        const createContacts = await prisma.contacts.create({
          data: newOBject
        })



    return NextResponse.json({
      message: 'Данные успешно созданы',
      data: createContacts
    })

    } else {
        console.log('Обновляем')

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