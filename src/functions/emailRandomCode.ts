
import nodemailer from 'nodemailer'


// mail


const transporter = nodemailer.createTransport({
    host: 'smtp.yandex.ru',
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



export const sendRandomCode = async (email: string, code: number): Promise<{status: number, message: string}> => {

    try {

        const info = await transporter.sendMail({
            from: 'geokviz@sgm.ru',
            to: email,
            subject: 'Код подтверждения',
            text: `
            Здравствуйте\n
            Для завершения регистрации на нашем сайте, пожалуйста, введите следующий код подтверждения: ${code}

            Если вы не запрашивали код подтверждения, игнорируйте это письмо.
            `
        })


        if (info && info.messageId) {
            console.log(`Сообщение отправлено на почту ${email}. ID сообщения: ${info.messageId}`);
            return {
                status: 200,
                message: 'saccess'
            }
        } else {
            console.log(`Ошибка при отправке сообщения на почту ${email}`);
            return {
                status: 400,
                message: 'error'
            }
        }
        

        
    } catch (error: Error | unknown) {
        if (error instanceof Error) {
            console.error(`Не удалось отправить код подтверждения на почту ${email} ${error.message}`)
            return {
                status: 400,
                message: 'error'
            }
        }

        console.error(error)
        return {
            status: 400,
            message: 'error'
        }
        
    }

}

