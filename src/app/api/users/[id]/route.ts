
import { NextResponse } from "next/server";
import { PrismaClient } from "@/../generated/prisma/client.js";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

// 

const prisma = new PrismaClient();

//


export const GET = async (req: Request, context: any) => {
    try {
        const { id } = await context.params;

        const user = await prisma.user.findUnique({
            where: {
                id: parseInt(id)
            },
            include: {
                profile: true,
                collection: true
            }
        });

        if (!user) {
            return NextResponse.json({
                message: "Пользователь не найден"
            });
        }

        return NextResponse.json(user);

    } catch (error) {
        
    }
}


export const DELETE = async (req: Request, context: any) => {
    try {

        const { id } = await context.params

        const deleteProfile = await prisma.profile.deleteMany({
            where: {
                userId: parseInt(id)
            }
        })

        const deleteUser = await prisma.user.delete({
            where: {
                id: parseInt(id)
            },
            include: {
                profile: true,
                collection: true
            }
        })

        if (!deleteUser) {return NextResponse.json({
            message: "Пользователь не найден"
            }
        )}


        (await cookies()).delete('accessToken');
        (await cookies()).delete('admin')


        return NextResponse.json(id)


        
    } catch (error: Error | unknown) {

        if (error instanceof Error) {
            return NextResponse.json({error: error.message}, { status: 500 })
        }

        return NextResponse.json({
            error: {
                message: "Something went wrong"
            }
        })
        
    }
}



export const PATCH = async (req: Request, context: {params: any}) => {
    try {

        const { id } = await context.params 
        const data = await req.json()


        if (data.total) {
            const { total } = data

            const updateTotal = await prisma.user.update({
            where: {
                id: parseInt(id)
            },

            data: {
                total: total
            }
        })

        if (!updateTotal) {
            return NextResponse.json({message: `Ошибка обновдления тотал параматра`})
        }

        return NextResponse.json({
            message: "Тотал обновлен"
        })


        } else if (data.passed) {
            const { passed } = data

            const newMineralPassed = await prisma.user.update({
            where: {
                id: parseInt(id)
            },

            data: {
                mineralPassed: {
                    create: passed
                }
            }
        })

        if (!newMineralPassed) {
            NextResponse.json({
                message: "Ошибка обновления статуса прохождения квиза"
            })
        }


        console.log(newMineralPassed, "newMineralPassed")

        return NextResponse.json({
            message: "Запись прохождения квиза обновлен"
        })

        } else if (data.status) {

            const { status } = data

            const newStatus = await prisma.user.update({
                where: {
                    id: parseInt(id)
                },

                data: {
                    status: status
                }
            })


            if (!newStatus) {
                return NextResponse.json({
                    message: "Ошибка обновления статуса"
                })
            }

            return NextResponse.json({
                message: "Статус обновлен"
            })
        } else if (data.visible) {

                const { visible } = data

                console.log(visible)

                const newVisible = await prisma.user.update({
                    where: {
                        id: parseInt(id)
                    }, 
                    data: {
                        firstVisit: visible
                    }       
                })

                if (!newVisible) {
                    NextResponse.json({
                        message: "Ошибка обновления первого посещения"
                    })
                }

                return NextResponse.json({
                    message: "Статус первого посещения обновлен"
                })
        }


    } catch (error: Error | unknown) {

        if (error instanceof Error) {
            return NextResponse.json({error : error.message})
        }
        return NextResponse.json(error) 
    }
}