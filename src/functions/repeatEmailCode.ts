export const repeatEmailCode = async (email: string, code: string) => {
    try {

        console.log(email, code)

        const responce = await fetch('/api/repeat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, code })
        })

        if (!responce.ok) {
            if (responce.status === 404) {
                return `Пользователь с почтой ${email} не найден`
            } else {
                throw new Error(`Ошибка отправки повторного кода на почту ${responce.status} ${responce.statusText}`)
            }
        }

        const data = await responce.json()
        alert(data.message)
        return data
        
        
    } catch (error: Error | unknown) {
        if (error instanceof Error) {
            return `Не удалось отправить повторный код на почту ${email} ${error.message}`
        }

 
}

}