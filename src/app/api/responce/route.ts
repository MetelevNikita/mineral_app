import { NextResponse } from "next/server";
import { PrismaClient } from "@/../generated/prisma/client.js";

// 

import { sendRandomCode } from "@/functions/emailRandomCode";
import { cookies } from "next/headers";


// 

const prisma = new PrismaClient()

// 

export const POST = async (req: Request) => {
  try {


    const generateRandomCode = () => {
      return Math.floor(100000 + Math.random() * 900000); // Генерация 6-значного числа
    }


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


    // генерация кода


    const code = generateRandomCode();

    (await cookies()).set('code', code.toString());
    (await cookies()).set('email', email.toString());


    console.log('Код после регистрации отправляется на почту:', code);
    await sendRandomCode(email, code);
    
  } catch (error: Error | unknown) {
    if (error instanceof Error) {
      NextResponse.json({
        error: error.message
      })
    }

    NextResponse.json({
      error: error
    })
    
  }
}