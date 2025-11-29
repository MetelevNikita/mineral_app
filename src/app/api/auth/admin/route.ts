import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../../generated/prisma";
import { cookies } from "next/headers";
import jwt from 'jsonwebtoken'
import bcryptjs from 'bcryptjs'

// 


const prisma = new PrismaClient()

// 

export const POST = async (req: Request): Promise<{message: string, status: number, data: string} | any> => {
  try {


    const {email, password} = await req.json()
    
    if (!email || !password) {
      return NextResponse.json({
        status: 400,
        data: 'error',
        message: "Не все поля заполнены"
      })
    }

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      }
    })

    if (!user) {
      return NextResponse.json({
        status: 400,
        data: 'error',
        message: "Пользователь не найден"
      })
    }


    console.log(user)

    if (!bcryptjs.compareSync(password, user.password)) {
        return NextResponse.json({
          status: 400,
          data: 'error',
          message: "Неверный пароль"
        })
    }


    if (!user.isAdmin) {
      return NextResponse.json({
        status: 400,
        data: 'error',
        message: "Пользователь не является администратором, вы не сможете зайти"
      })
    }

    const token = jwt.sign({
      id: user.id,
      email: user.email,
      isAdmin: user.isAdmin
    }, process.env.SECRET_KEY as string, {
      expiresIn: '1h'
    })

    const cookieStore = await cookies()

    cookieStore.set('adminToken', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 3600
    })











    return NextResponse.json({
      status: 200,
      data: 'success',
      message: "Пользователь авторизован в админ панели"
    })
    
  } catch (error: Error | unknown) {
    if (error instanceof Error) {
      console.error(`Ошибка авторизации админ панели: ${error.message}`)
      return NextResponse.json({
        status: 500,
        data: 'error',
        message: `Ошибка авторизации админ панели: ${error.message}`
      })
    }
  }
} 