import { NextResponse } from "next/server";
import { PrismaClient } from "@/../generated/prisma/client.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from 'next/headers'

// 

const prisma = new PrismaClient();


export const POST = async (req: Request) => {

    try {

        const {email, password, rememberMe} = await req.json()

        if(!email || !password) {
            return NextResponse.json({
                message: "Email or password is empty"
            }, {status: 400})
        }


        const authUser = await prisma.user.findFirst({
            where: {
                email: email
            }
        })

        if(!authUser) {
            console.log('email not found')
            return NextResponse.json({ message: "Email not found" }, { status: 404 });
        }

        const isMatch = await bcrypt.compare(password, authUser.password)
        if(!isMatch) {
            return NextResponse.json({ message: "Password is incorrect" }, { status: 401 });
        }


        const token = jwt.sign({id: authUser.id, email: authUser.email}, process.env.SECRET_KEY as string, {expiresIn: '1h'})
  
        

        if (rememberMe) {
            (await cookies()).set('accessToken', token, {
                sameSite: 'lax',
                maxAge: 60 * 60 * 24 * 7,
            })
        } else {
            (await cookies()).set('accessToken', token, {
                sameSite: 'lax',
            })
        }

         
        (await cookies()).set('admin', String(authUser.isAdmin), {
            sameSite: 'lax',
        })


        return NextResponse.json({
            message: "success",
            userId: authUser.id,
        });



        
    } catch (error: Error | unknown) {
        if (error instanceof Error) {
            return NextResponse.json({message: error.message}, {status: 500} )
        }
    }
}