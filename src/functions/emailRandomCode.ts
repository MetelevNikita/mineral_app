import { error } from 'console'
import nodemailer from 'nodemailer'


export const sendRandomCode = async (email: string, code: number) => {

    try {


        const trasporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASS
            }
        })



        const options = {
            from: 'MineralValidatePerson@gmail.com',
            to: email,
            subject: "Проверка пользователя с сайта Mineral.ru",
            text : `Првоерочный код
        
                    ${code}
                
                    не отвечайте на это письмо`
        }


        const sendEmail = await trasporter.sendMail(options)
        console.log(sendEmail)

        return sendEmail



        
    } catch (error: Error | unknown) {

        if (error instanceof Error) {
            console.log(`Код не сформирован. Сообщение на почту ${email} не отправлено ${error.message}`)
        }

        console.log(`Код не сформирован ${error}`)
    }

}