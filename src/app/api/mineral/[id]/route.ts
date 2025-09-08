import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../../generated/prisma";
import fs from 'fs'
import path from 'path'
import { transliterate } from 'transliteration'



// 

const prisma = new PrismaClient()



export const GET = async (res: Response, context: {params: {id: any}}) => {
    try {

        const { id } = await context.params
        console.log(id)


        const getSingleMinerale = await prisma.mineral.findFirst({
            where: {
                id: parseInt(id)
            },

            include: {
                question: {
                    include: {
                        answers: true
                    }
                }
            }
        })

        if (!getSingleMinerale) {
            return NextResponse.json({message: 'Минерал не найден в базе'})
        }

        return NextResponse.json(getSingleMinerale)


    } catch (error: Error | unknown) {

        if (error instanceof Error) {
            return NextResponse.json({error: error.message})
        }

        return NextResponse.json({error})
        
    }
}


export const DELETE = async (res: Response, context: {params: {id: any}}) => {
    try {


        console.log('delete')

        const { id }= await context.params

        console.log(id)

        const findMineral = await prisma.mineral.findFirst({
            where: {
                id: parseInt(id)
            },
            include: {
                question: {
                    include: {
                        answers: true
                    }
                }
            }
        })


        if (!findMineral) {
            return NextResponse.json({message: `Не найден минерал для удаления`})
        }


        console.log(findMineral)


        const deleteMineral = await prisma.mineral.deleteMany({
            where: {
                id: parseInt(id)
            }
        })

        if (!deleteMineral) {
            return NextResponse.json({message: `Не удалось удалить минерал`})
        }


        const latinText = transliterate(findMineral.title);

        const uploadDir = path.resolve(process.cwd() + '/src' + '/app' + '/uploads' + '/mineral' + `/${latinText}`)
        fs.rmSync(uploadDir, {recursive: true})

        return NextResponse.json({message: `Минерал с id - ${findMineral.id} удален`})

    } catch (error: Error | unknown) {

        if (error instanceof Error) {
            return NextResponse.json({error: error.message})
        }

        return NextResponse.json({error})
        
    }
}


export const POST = async (req: Request, context: {params: {id: any}}) => {
    try {


        const formData = await req.formData()

        const title = formData.get('title') as string
        const image = formData.get('image')
        const arrAnswers = formData.get('arrAnswers') as string
        const arr = JSON.parse(arrAnswers)

        const {id} = await context.params
        console.log(id)

        const createQuestion = await prisma.mineral.update({
            where: {
                id: parseInt(id)
            },
            data: {
                question: {
                    create: {
                        title,
                        image: '',
                        answers: {
                            create: arr.map((answer: any) => ({
                                    text: answer.text,
                                    correct: answer.correct, // или другое поле
                                })),
                            }
                        }
                    }
                }
            
        })

        console.log(createQuestion)

        return NextResponse.json({message: 'allow create question'})
        
    } catch (error: Error | unknown) {
        if (error instanceof Error) {
            return NextResponse.json({error: error.message})
        }

        return NextResponse.json(error)
        
    }
}