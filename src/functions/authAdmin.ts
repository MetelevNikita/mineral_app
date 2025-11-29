export const authAdmin = async (authData: {email: string, password: string}) => {

    try {

        const {email, password} = authData

        const response = await fetch('/api/auth/admin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            }),
            
        })

        if (!response.ok) {
            throw new Error(`Ошибка авторизации админ пользователя ${response.statusText}`)
   
        }


        const data = await response.json()
        console.log(data)
        return data



    } catch (error: Error | unknown) {

        if (error instanceof Error) {
            console.error(`Ошибка авторизация админ панели: ${error.message}`)
        }

        console.error(`Ошибка авторизация админ панели: ${error}`)

        
        
    }

}