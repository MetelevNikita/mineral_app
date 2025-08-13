export const getSingleUser = async (userId: string) => {
    try {


        const responce = await fetch(`/api/users/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (!responce.ok) {
            throw new Error(`Ошибка получения пользователя ${responce.status}`)
        }

        const data = await responce.json()
        console.log(`Пользователь получен ${data}`)
        return data

        
    } catch (error: Error | unknown) {
        if(error instanceof Error) {
            console.log(`Ошибка получения пользователя ${error.message}`)
            throw new Error(`Ошибка получения пользователя ${error.message}`)
        }

        console.log(error)
        throw new Error(`Ошибка получения пользователя ${error}`)
    }
}