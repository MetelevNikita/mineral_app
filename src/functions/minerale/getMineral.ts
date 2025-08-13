export const getMineral = async () => {
    try {


        const responce = await fetch('/api/mineral', {
            method: 'GET',
        })

        if (!responce.ok) {
            throw new Error(`Ошибка запроса на сервер минералов ${responce.status}`)
        }

        const data = await responce.json()
        return data
        
    } catch (error: Error | unknown) {

        if (error instanceof Error) {
           console.error(`Ошибка получения минералов ${error.message}`)
        }

        console.log(error)


    }
}