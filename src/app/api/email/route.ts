import { NextResponse } from "next/server";

// 

import nodemailer from 'nodemailer';

// 


export const POST = async (req: Request) => {
    try {

        const {name, email, message} = await req.json()



        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 587,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASS
            }
        })


        const data = await transporter.sendMail({
            from: `${name} <${email}>`,
            to: email,
            subject: 'Новое сообщение с сайта',
            text: `
                Автор: ${name}
                Почта отправителя: ${email}\n\n
                Сообщение: ${message}
            `

        })

        console.log(data)

        return NextResponse.json({
            data: {
                message: "Message sent successfully"
            }
        })
        
    } catch (error: Error | unknown) {
        if (error instanceof Error) {
            return NextResponse.json({message: error.message}, {status: 500} )
        }
    }
}