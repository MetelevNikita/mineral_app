
import nodemailer from 'nodemailer'

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


export const sendRandomCode = async (email: string, code: number) => {

    try {

       const info = await transporter.sendMail({
            from: 'Propaganda1108@gmail.com',
            to: email,
            subject: 'Код подтверждения',
            text: `
            Ваш код подтверждения: ${code}
            `
        })


        console.log(`Сообщение отправлено на почту ${email}`, info.messageId);
        
    } catch (error: Error | unknown) {
        if (error instanceof Error) {
            console.error(`Не удалось отправить код подтверждения на почту ${email} ${error.message}`)
            return `Не удалось отправить код подтверждения на почту ${email} ${error.message}`
        }

        console.error(error)
        return error
        
    }

}