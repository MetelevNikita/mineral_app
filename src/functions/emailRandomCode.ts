
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
            debug: true,
            tls: {
                rejectUnauthorized: false,
                ciphers: 'SSLv3',
                secureOptions: 0
            }
            
        })



        const options = {
            from: process.env.EMAIL,
            to: email,
            subject: "Проверка пользователя с сайта Mineral.ru",
            text : `Провоерочный код для регистрации на сайте Geokviz.ru

                    ${code} - для почты ${email}
                
                    не отвечайте на это письмо`
        }


        await trasporter.sendMail(options).then((data) => {
            if (data) {
                console.log('Код отправлен')
            } else {
                console.log(`Код не отправлен ${data}`)
                throw new Error('Код не отправлен')
            }
        }).catch((error) => {
            if (error) {
                console.log(`Код не отправлен ${error}`)
                throw new Error('Код не отправлен')
            }
        })




        
    } catch (error: Error | unknown) {

        if (error instanceof Error) {
            console.log(`Код не сформирован. Сообщение на почту ${email} не отправлено ${error.message}`)
        }

        console.log(`Код не сформирован ${error}`)
    }

}