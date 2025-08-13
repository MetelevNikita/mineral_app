export const getSingleMineral = async (id: number | string) => {

    try {

        const response = await fetch(`/api/mineral/${id}`, {
            method: 'GET'
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