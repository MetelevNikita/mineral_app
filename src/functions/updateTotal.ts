export const updateTotal = async (id: string, total: number) => {
    try {

        console.log(total)

        const responce = await fetch(`/api/users/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({total})
        })

        if (!responce.ok) {
            throw new Error(`ОШИБКА запроса! ${responce.status}`)
        }


        const data = await responce.json()
        console.log(data)
        return data

    
    } catch (error: Error | unknown) {

        if (error instanceof Error) {
            console.log(`Ошибка обновления параметра балов ${error.message}`)
        }

        console.log(error)

        
    }
}