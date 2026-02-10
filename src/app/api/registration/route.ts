import { NextResponse } from "next/server";
import { PrismaClient } from "@/../generated/prisma/client.js";
import bcrypt from "bcryptjs";

// 

import { sendRandomCode } from "@/functions/emailRandomCode";
import { cookies } from "next/headers";
import { error } from "console";
import { em } from "motion/react-client";

// 

const prisma = new PrismaClient();

//

const generateRandomCode = () => {
  return Math.floor(100000 + Math.random() * 900000); // Генерация 6-значного числа
}


// 


export const POST = async (req: Request, res: Response) => {
  try {

    const {name, email, password} = await req.json()

    console.log(name, email, password)

    // Проверяем пользователя на почту

    const emailIsValid = await prisma.user.findFirst({
      where: {
        email: email
      }
    })

    if (emailIsValid) {
      return NextResponse.json({
        message: 'Пользователь с такой почтой уже зарегестрирован'
      })
    }


    // Генерация проверочного кода

    const code = generateRandomCode();

    (await cookies()).set('code', code.toString());
    (await cookies()).set('userData', JSON.stringify({name: name, email: email, password: password}));


    console.log('Код после регистрации отправляется на почту:');

    // Отправка проверочного кода на почту

    const messagetoEmail = await sendRandomCode(email, code) as {status: number, message: string};

    console.log(`Данные об отправке письма на почту ${messagetoEmail}`)

    if (messagetoEmail.message === 'error') {
        return NextResponse.json({
            message: 'Ошибка отправки кода на email'
        })
    }

    return NextResponse.json({
      message: `Сообщение отправлено на почту ${email}`
    })
    
  } catch (error: Error | unknown) {

    if (error instanceof Error) {
      return NextResponse.json({
        message: `error ${error.message}`
      })
    }


    return NextResponse.json({
      message: error
    })
    
  }
}