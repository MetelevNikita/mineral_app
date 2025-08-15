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


        console.log('click')

        const users = await prisma.user.findMany({
            include: {
                collection: true,
                profile: true,
                mineralPassed: true
            }
        })

        if (!users || users.length < 1) {
            return NextResponse.json([])
        }

        return NextResponse.json(users)
        
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


        const findEmail = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (findEmail) {
            if (findEmail.email === email) {
                return NextResponse.json({message: "Email already exists"})
            }
        }


        const hashPassword = await bcrypt.hash(password, 10)

        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password: hashPassword,
                total: 0,
                status: 'Студент-геолог',
                isAdmin: false
            },
            include: {
                collection: true,
                profile: true,
                mineralPassed: true
            }
        })

        if (!newUser) {
            return NextResponse.json({message: "User not created"})
        }


        const code = generateRandomCode()
        const data = await sendRandomCode(email, code);

        // 

        (await cookies()).set('code', code.toString());
        (await cookies()).set('email', email.toString());


        return NextResponse.json({message:'Email send code'})


        
    } catch (error: Error | unknown) {
        if (error instanceof Error) {
            return NextResponse.json({error: error.message}, { status: 500 })
        }

        return NextResponse.json({error})
    }
}


