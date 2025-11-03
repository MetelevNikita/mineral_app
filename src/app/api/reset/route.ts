import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// 

import { PrismaClient } from "../../../../generated/prisma";

// 

import nodemailer from 'nodemailer'


// transporter

 const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    },
        connectionTimeout: 10000,
        socketTimeout: 15000,
        logger: true,
        debug: true,
        tls: {
            rejectUnauthorized: true,
            minVersion: 'TLSv1.2'
        }
})

// 


const prisma = new PrismaClient({})


export const POST = async (req: Request): Promise<NextResponse<{status: number, message: string}> | any> => {
  try {

    const body = await req.json();

    // 

    const { email } = body;
    console.log(email)

    const findUser = await prisma.user.findUnique({
      where: {
        email: email
      }
    })

    console.log(findUser)

    if (!findUser) {
      return NextResponse.json({
        status: 404,
        message: 'Пользователь с такой почтой не найден'
      })
    }

      console.log(process.env.SECRET_KEY)


      const token = jwt.sign({uid: findUser.id, purpose: 'reset'}, process.env.SECRET_KEY as string, {expiresIn: '1h'})

      const link = `${process.env.URL}/auth/reset/${token}?&email=${findUser.email}`
      console.log(link)

      const info = await transporter.sendMail({
        from: 'Propaganda1108@gmail.com',
        to: email,
        subject: 'Восстановление пароля',
        text: `ссылка для сброса пароля\n\nссылка - ${link}`
      })

      console.log(info)

      if (!info) {
        return NextResponse.json({
          status: 400,
          message: 'Ошибка отправки письма'
        })
      }

      return NextResponse.json({
        status: 200,
        message: 'Письмо отправлено'
      })
  } catch (error: Error | unknown) {
    if (error instanceof Error) {
      return NextResponse.json({
        status: 400,
        message: `Ошибка сброса пароля: ${error.message}`
      })
    }

    return NextResponse.json({
      status: 400,
      message: `Ошибка сброса пароля: ${error}`
    })
  }
}



export const PATCH = async (req: Request) => {
  try {

    const body = await req.json();
    const {email, password, repeatPassword} = body;

    console.log(email, password, repeatPassword)


    console.log(password == repeatPassword)


    if (password !== repeatPassword) {
      return NextResponse.json({
        status: 400,
        message: 'Пароли не совпадают'
      })
    }


    const findUser = await prisma.user.findUnique({
      where: {
        email: email
      }
    })

    if (!findUser) {
      NextResponse.json({
        status: 404,
        message: 'Пользователь с такой почтой не найден'
      })
    }

    const hashPassword = await bcrypt.hash(password, 10)

    console.log('Новый пароль ' + password + ' ' + hashPassword)


    const updatePassword = await prisma.user.update({
      where: {
        email: email
      },
      data: {
        password: hashPassword
      }
    })

    if (!updatePassword) {
      return NextResponse.json({
        status: 400,
        message: 'Ошибка обновления пароля'
      })
    }

    return NextResponse.json({
      status: 200,
      message: 'Пароль успешно изменен',

    })
    
  } catch (error: Error | unknown) {
    if (error instanceof Error) {
      return NextResponse.json({
        status: 400,
        message: `Ошибка сброса пароля: ${error.message}`
      })
    }

    return NextResponse.json({
      status: 400,
      message: `Ошибка сброса пароля: ${error}`
    })
  }
}