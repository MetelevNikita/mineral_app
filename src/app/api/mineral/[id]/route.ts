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


export const PATCH = async (req: Request, context: {params: {id: any}}) => {
    try {


        const { id } = await context.params
        console.log(id)

        const formData = await req.formData()
        console.log(formData)



        const title = formData.get('title') as string | null;
        const description = formData.get('description') as string | null
        const video = formData.get('video') as File | null
        const image = formData.get('image') as File | null
        const isPassed = formData.get('isPassed') as string | null



        const currentMineral = await prisma.mineral.findFirst({
            where: {
                id: parseInt(id)
            }
        })


        if (!currentMineral) {
            return NextResponse.json({
                message: `Минерал под таким ${id} не найден`,
            })
        }

        const endFolderPath = path.parse(currentMineral.video).dir.split('/').slice(-1)[0]
        const uploadFolder = path.join(process.cwd(), 'src', 'app', 'uploads', 'mineral', endFolderPath)


        const updateData: any = {}


        if (title !== null) {
            console.log('Updating title:', title)
            updateData.title = title
        }

        if (description !== null) {
            console.log('Updating description')
            updateData.description = description
        }

        if (isPassed !== null) {
            console.log('Updating isPassed:', isPassed)
            updateData.isPassed = isPassed === 'true'
        }


        if (image !== null) {

            try {
                
            console.log(image.name)
            const currentImageName = path.parse(currentMineral.image).base

            // delete file

            fs.unlinkSync(path.join(process.cwd(), 'src', 'app', 'uploads', 'mineral', endFolderPath, currentImageName))

            console.log(`Файл ${currentImageName} удален`)

            // download file

            const buffer = await image.arrayBuffer()
            const imageBuffer = Buffer.from(buffer)
            fs.writeFileSync(uploadFolder + '/' + image.name, imageBuffer)

            // url to DB

            updateData.image = '/api/uploads/mineral/' + endFolderPath + '/' + image.name

            } catch (error) {
                console.error('Ошибка записи фото:', error);
            }


        }


        if (video !== null) {

            try {


                
                console.log(video.name)
                const currentVideoName = path.parse(currentMineral.video).base

                // delete file

                fs.unlinkSync(path.join(process.cwd(), 'src', 'app', 'uploads', 'mineral', endFolderPath, currentVideoName))

                console.log(`Файл ${currentVideoName} удален`)

                // download file

                const buffer = await video.arrayBuffer()
                const videoBuffer = Buffer.from(buffer)

                const uploadPath = path.join(process.cwd(), 'src', 'app', 'uploads', 'mineral', endFolderPath, video.name);
                const writeStream = fs.createWriteStream(uploadPath);

                writeStream.write(videoBuffer, (err) => {
                    if (err) {
                        console.error('Ошибка записи файла:', err);
                    }
                    console.log('Видео успешно загружено');
                });

                writeStream.end();
                
                // url to DB

                updateData.video = '/api/uploads/mineral/' + endFolderPath + '/' + video.name



            } catch (error) {
                console.error('Ошибка записи видео:', error);
            }

        }



        if (Object.keys(updateData).length === 0) {
            return NextResponse.json({
                message: 'Нет данных для обновления',
            }, { status: 400 })
        }

        console.log('Final update data:', updateData)




        const updateMineral = await prisma.mineral.update({
            where: { id: parseInt(id) },
            data: updateData
        })

        if (!updateMineral) {
            return NextResponse.json({
                message: 'Ошибка обновления данных минереала',
            })
        }

        return NextResponse.json({
            message: 'Данные успешно обновлены',
            data: updateMineral
        })


    } catch (error: Error | unknown) {
        if (error instanceof Error) {
            console.error(`Ошибка обновления данных минереала: ${error.message}`)
            throw new Error(
                `Ошибка обновления данных минереала: ${error.message}`
            )
        }


        console.error(`Ошибка обновления данных минереала: ${error}`)
        throw new Error(
            `Ошибка обновления данных минереала: ${error}`
        )
    }
}