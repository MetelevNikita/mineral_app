import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../../generated/prisma";
import fs from 'fs'
import path from 'path'
import { transliterate } from 'transliteration'
import { error } from "console";



// 

const prisma = new PrismaClient()





export const GET = async (res: Response, context: {params: {title: any}}) => {
    try {

        const { title } = await context.params

        const getSingleMinerale = await prisma.mineral.findFirst({
            where: {
                title: title
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


export const DELETE = async (res: Response, context: {params: {title: any}}) => {
    try {

        const { title }= await context.params

        const findMineral = await prisma.mineral.findFirst({
            where: {
                title: title
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

        const deleteMineral = await prisma.mineral.deleteMany({
            where: {
                title: title
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


export const POST = async (req: Request, context: {params: {title: any}}) => {
    try {


        const formData = await req.formData()

        const {title} = await context.params

        const allQuestions = formData.get('questions') as string
        const arr = JSON.parse(allQuestions)


        // 

        const getMineral = await prisma.mineral.findFirst({
            where: {
                title: title
            },
            include: {
                question: {
                    include: {
                        answers: true
                    }
                }
            }
        })


        if (!getMineral) {
            return NextResponse.json({
                message: `Минерал ${title} для обновления не найден`
            })
        }



        if (getMineral.question.length > 0) {

            await prisma.answer.deleteMany({
                where: {
                    question: {
                        mineralId: getMineral.id
                    }
                }
            })
            
            await prisma.question.deleteMany({
                where: {
                    mineralId: getMineral.id
                }
            })


            console.log(`Cтарые данные геоквиза ${getMineral.title} удалены`)
        }

            console.log(`Новые данные по геоквизу ${getMineral.title}`)


        // 

        const createQuestion = await prisma.mineral.update({
            where: {
                id: getMineral.id
            },
            data: {
                question: {
                    create: arr.map((item: {title: string, answers: any}) => {
                        return {
                            title: item.title,
                            answers: {
                                create: item.answers.map((answer: {text: string, correct: string}) => {
                                    return {
                                        text: answer.text,
                                        correct: answer.correct
                                    }
                                })
                            }
                        }
                  
                    })
                }
            }
        })

        if (!createQuestion) {
            return NextResponse.json({
                error: 'Ошибка создания геоквиза'
            })
        }

        return NextResponse.json({message: 'Геоквиз создан или изменен'})
        
    } catch (error: Error | unknown) {
        if (error instanceof Error) {
            return NextResponse.json({error: error.message})
        }

        return NextResponse.json(error)
        
    }
}


export const PATCH = async (req: Request, context: {params: {title: any}}) => {
    try {


        const { title } = await context.params
        const formData = await req.formData()

        const titleMineral = formData.get('title') as string | null;
        const description = formData.get('description') as string | null
        const video = formData.get('video') as File | null
        const image = formData.get('image') as File | null
        const isPassed = formData.get('isPassed') as string | null



        const currentMineral = await prisma.mineral.findFirst({
            where: {
                title: title
            }
        })


        if (!currentMineral) {
            return NextResponse.json({
                message: `Минерал ${title} не найден`,
            })
        }

        const endFolderPath = path.parse(currentMineral.video).dir.split('/').slice(-1)[0]
        const uploadFolder = path.join(process.cwd(), 'src', 'app', 'uploads', 'mineral', endFolderPath)


        const updateData: any = {}


        if (titleMineral !== null) {
            updateData.title = titleMineral
        }

        if (description !== null) {
            updateData.description = description
        }

        if (isPassed !== null) {
            updateData.isPassed = isPassed === 'true'
        }


        if (image !== null) {

            try {
            const currentImageName = path.parse(currentMineral.image).base

            // delete file

            if (fs.existsSync(path.join(process.cwd(), 'src', 'app', 'uploads', 'mineral', endFolderPath, currentImageName))) {
                fs.unlinkSync(path.join(process.cwd(), 'src', 'app', 'uploads', 'mineral', endFolderPath, currentImageName))
            }


            // download file

            if (!fs.existsSync(uploadFolder)) {
                fs.mkdirSync(uploadFolder, {recursive: true})
            }

            const buffer = await image.arrayBuffer()
            const imageBuffer = Buffer.from(buffer)
            const fileUploaded = fs.writeFileSync(uploadFolder + '/' + image.name, imageBuffer)


            // url to DB

            updateData.image = '/api/uploads/mineral/' + endFolderPath + '/' + image.name

            } catch (error) {
                console.error('Ошибка записи фото:', error);
            }


        }


        if (video !== null) {

            try {

                const currentVideoName = path.parse(currentMineral.video).base

                // delete file

                if (fs.existsSync(path.join(process.cwd(), 'src', 'app', 'uploads', 'mineral', endFolderPath, currentVideoName))) {
                    fs.unlinkSync(path.join(process.cwd(), 'src', 'app', 'uploads', 'mineral', endFolderPath, currentVideoName))
                }


                // download file

                const buffer = await video.arrayBuffer()
                const videoBuffer = Buffer.from(buffer)

                const uploadPath = path.join(process.cwd(), 'src', 'app', 'uploads', 'mineral', endFolderPath);

                if (!fs.existsSync(uploadPath)) {
                    fs.mkdirSync(uploadFolder)
                }

                const writeStream = fs.createWriteStream(uploadPath + '/' + video.name);

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



        const updateMineral = await prisma.mineral.update({
            where: { id: currentMineral.id },
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