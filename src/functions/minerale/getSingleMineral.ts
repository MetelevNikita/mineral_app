export const getSingleMineral = async (title: string) => {

    try {

        const response = await fetch(`/api/mineral/${title}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (!response.ok) {
            throw new Error(`Ошибка получения данных с сервера ${response.status}`)
        }

        const data = await response.json()
        return data

    } catch (error: Error | unknown) {

        if (error instanceof Error) {
            console.error(`Не удалось получить выбранный минерал ${error.message}`)
        }

        console.error(error)
    }

}