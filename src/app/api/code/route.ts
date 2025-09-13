import { NextResponse } from "next/server";
import { Resend } from "resend";


const resendApi = process.env.RESEND_API_KEY
console.log(resendApi)

const resend = new Resend(resendApi)

export const POST = async (req: Request) => {

  console.log('принимаем данные')

  const {email, code} = await req.json()
  console.log({email, code})


  return NextResponse.json({
    json: {
      message: "Сообщение отправлено",
    }
  })

  // try {

  //   const { data, error } = await resend.emails.send({
  //     from: 'Acme <onboarding@resend.dev>',
  //     to: [email],
  //     subject: 'Hello world',
  //     react: `<div>
  //                 <div>Код варификации!</div>
  //                 <div>${code}</div>
  //             </div>`,
  //   })


  //   if (error) {
  //     return Response.json({ error }, { status: 500 });
  //   }

  //   return Response.json(data);
    
  // } catch (error: Error | unknown) {
  //   if (error instanceof Error) {
  //     if (error.message === "") {
  //       return NextResponse.json({ error: error.message })
  //     }
  //   }
  // }
}