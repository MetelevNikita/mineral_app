import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../generated/prisma";
import fs from "fs"
import path from "path"

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

    const collectionPath = path.join(process.cwd(), "public", "uploads" ,"collections")

    if (!fs.existsSync(collectionPath)) {
      fs.mkdirSync(collectionPath, {
        recursive: true
      })
    }

    


    const formData = await request.formData()

    // 

    const title = formData.get('title') as string
    const image = formData.get('image') as File


    const urlParse = path.parse(image.name)
    const newImageName = urlParse.name + '_' + Date.now() + urlParse.ext

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

    if (image) {
      const imageBuffer = await image.arrayBuffer()
      const BufferImage = Buffer.from(imageBuffer)
      console.log(image.name)


      try {
        await fs.promises.writeFile(collectionPath + '/' + newImageName, BufferImage)
        console.log(`Файл ${image.name} успешно загружен в коллекцию`)
        
      } catch (error: Error | unknown) {
        if (error instanceof Error) {
          console.error(`Ошибка загрузки файла ${image.name}: ${error.message}`)
        }
        return NextResponse.json(error)
      }

    }




    const imageUrl = `/uploads/collections/${newImageName}`

    const newCollectionMineral = await prisma.collectionMineral.create({
      data: {
            title: title,
            image: imageUrl,
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