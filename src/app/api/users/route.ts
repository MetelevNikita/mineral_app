import { NextResponse } from "next/server";
import { PrismaClient } from "@/../generated/prisma/client.js";
import bcrypt from "bcryptjs";

// 

import { sendRandomCode } from "@/functions/emailRandomCode";
import { cookies } from "next/headers";

// 

const prisma = new PrismaClient();

//

const generateRandomCode = () => {
  return Math.floor(100000 + Math.random() * 900000); // Генерация 6-значного числа
}



// 


export const GET = async (req: Request | any, res: Response | any): Promise<any> => {
    try {



        const users = await prisma.user.findMany({
            include: {
                collection: true,
                profile: true,
                mineralPassed: true,
            }
        })

        if (!users || users.length < 1) {
            return NextResponse.json([])
        }


        const withoutPassword = [...users]
        const checkoutUsers = withoutPassword.map((item) => {
            const entries = Object.entries(item).filter((val) => {
                return val[0] !== 'password'
            })
            
            const res = Object.fromEntries(entries)
            return res
        })





        return NextResponse.json(checkoutUsers)
        
    } catch (error: Error | unknown) {
        
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({error})
    }
}


export const POST = async (req: Request | any, res: Response | any): Promise<any> => {
    try {

        const { name, email, password, isAdmin } = await req.json()

        const hashPassword = await bcrypt.hash(password, 10)

        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password: hashPassword,
                total: 0,
                status: 'Студент-геолог',
                isAdmin: (email === 'Kyle.B@mail.ru') ? true : false,
            },
            include: {
                collection: true,
                profile: true,
                mineralPassed: true,
            }
        })

        if (!newUser) {
            return NextResponse.json({message: "Пользователь не создан"})
        }



        return NextResponse.json({message: `Пользователь успешно зарегестрирован`})


        
    } catch (error: Error | unknown) {
        if (error instanceof Error) {
            return NextResponse.json({error: error.message}, { status: 500 })
        }

        return NextResponse.json({error})
    }
}


