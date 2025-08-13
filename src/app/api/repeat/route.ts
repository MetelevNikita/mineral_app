import { NextResponse } from "next/server";
import { cookies } from "next/headers";

// 

import { sendRandomCode } from '@/functions/emailRandomCode' 


export const POST = async (req: Request) => {
    try {

        const { email, code } = await req.json()

        if (!email || !code) {
            return NextResponse.json({
                message: "Поля не заполнены",
            })
        }

        // 


        const data = await sendRandomCode(email, code)

        if (!data) {
            return NextResponse.json({
                message: "Сообщение не отправлено - проверьте настройки VPN или отключите его",
            })
        }


        (await cookies()).set('code', code)

        return NextResponse.json({message: "Сообщение отправлено",})





        
    } catch (error: Error | unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message })
        }

        return NextResponse.json(error)
        
    }
}