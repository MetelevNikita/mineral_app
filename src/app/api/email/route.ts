import { NextResponse } from "next/server";

// 

import nodemailer from 'nodemailer';

// 


export const POST = async (req: Request) => {
    try {

        const {name, email, message} = await req.json()

        console.log(
            process.env.EMAIL, 
            process.env.PASS
        )



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
            to: process.env.EMAIL,
            subject: 'Новое сообщение с сайта',
            text: `
                Автор: ${name}
                Почта отправителя: ${email}\n\n
                Сообщение: ${message}
            `

        })


        console.log(data)
        // console.log(data)

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