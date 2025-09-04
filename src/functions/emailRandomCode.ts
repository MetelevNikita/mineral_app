import { error } from 'console'
import nodemailer from 'nodemailer'


export const sendRandomCode = async (email: string, code: number) => {

    try {

        console.log('начинаяем отправку кода на почту')

        console.log(email)
        console.log(code)


        const trasporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASS
            },
            pool: true,
            rateLimit: 1,
        })



        const options = {
            from: 'MineralValidatePerson@gmail.com',
            to: email,
            subject: "Проверка пользователя с сайта Mineral.ru",
            text : `Провоерочный код для регистрации на сайте Geokviz.ru

                    ${code} - для почты ${email}
                
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