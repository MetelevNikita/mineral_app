export const pathcMineral = async (mineral: FormData, title: string): Promise<{message: string, data: string, status: number}> => {

  try {

    const responce = await fetch(`/api/mineral/${title}`, {
        method: 'PATCH',
        body: mineral
    })

    if (!responce.ok) {
        return {
            message: `Ошибка обновления минерала ${responce.status}`,
            data: 'error',
            status: 500
        }
    }


    return {
        message: 'Минерал успешно обновлен',
        data: 'sucees',
        status: 200
    }

    
  } catch (error: Error | unknown) {

        if (error instanceof Error) {
           console.error(`Ошибка получения минералов ${error.message}`)
           return {
                message: `Ошибка обновления минерала ${error.message}`,
                data: 'sucees',
                status: 500
           }
        }

        console.log(error)
        return {
            message: 'Ошибка обновления минерала',
            data: 'sucees',
            status: 500
        }


    }
}