export const pathcMineral = async (mineral: FormData, id: string | number): Promise<{message: string, status: number}> => {

  try {

    const responce = await fetch(`/api/mineral/${id}`, {
        method: 'PATCH',
        body: mineral
    })

    if (!responce.ok) {
        throw new Error(`Ошибка обновления минерала ${responce.status}`)
    }


    return {
        message: 'Минерал успешно обновлен',
        status: 200
    }

    
  } catch (error: Error | unknown) {

        if (error instanceof Error) {
           console.error(`Ошибка получения минералов ${error.message}`)
           return {
               message: `Ошибка обновления минерала ${error.message}`,
               status: 500
           }
        }

        console.log(error)
        return {
            message: 'Ошибка обновления минерала',
            status: 500
        }


    }
}