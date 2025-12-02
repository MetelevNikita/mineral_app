export const deleteMineral = async (id: number | string): Promise<{message: string, data: string, status: number}> => {

  try {

    const responce = await fetch(`/api/mineral/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!responce.ok) {
      console.error(`Ошибка удаления минерала ${responce.status} ${responce.statusText}`)
      return {
        message: 'Ошибка удаления минерала',
        data: 'error',
        status: 500
      }
    }

    const data = await responce.json()
    console.log(data)
    return {
      message: `Минерал успешно удален`,
      data: 'sucees',
      status: 200
    }
    
  } catch (error: Error | unknown) {

        if (error instanceof Error) {
           console.error(`Ошибка удаления минерала ${error.message}`)
           return {
             message: 'Ошибка удаления минерала',
             data: 'error',
             status: 500
           }
        }

        return {
          message: 'Ошибка удаления минерала',
          data: 'error',
          status: 500
        }


    }
}