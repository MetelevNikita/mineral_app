export const deleteMineral = async (id: number | string): Promise<{message: string, status: number}> => {

  try {

    console.log('ID из DELETE MIENRTAAL', id)


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
        status: 500
      }
    }

    const data = await responce.json()
    console.log(data)
    return {
      message: `Минерал успешно удален`,
      status: 200
    }
    
  } catch (error: Error | unknown) {

        if (error instanceof Error) {
           console.error(`Ошибка удаления минерала ${error.message}`)
           return {
             message: 'Ошибка удаления минерала',
             status: 500
           }
        }

        console.log(error)
        return {
          message: 'Ошибка удаления минерала',
          status: 500
        }


    }
}