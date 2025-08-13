export const sendReviewEmail = async (messageEmail: {name: string, email: string, message: string}) => {
    try {


        const { name, email, message } = messageEmail


        console.log({
            name,
            email,
            message
        })


        const responce = await fetch('/api/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                message
            })
        })

        if (!responce.ok) {
            throw new Error(
                `Ошибка отправки сообщения на почту: ${responce.status} ${responce.statusText}`
            )
        }

        const data = await responce.json()
        console.log(data)

        return {message: 'success'}
        
    } catch (error: Error | unknown) {
        if (error instanceof Error) {
            console.error(`Error sending review email: ${error.message}`);
        }

        console.error(error)
    }
}