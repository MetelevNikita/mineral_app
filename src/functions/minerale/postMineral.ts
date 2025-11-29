export const postMineral = async (mineral: FormData): Promise<{message: string, status: number}> => {
  try {

    const responce = await fetch('/api/mineral', {
      method: 'POST',
      body: mineral

    })

    if (!responce.ok) {
      throw new Error(`Ошибка создания минерала ${responce.status}`)
    }

    const data = await responce.json()

    return {
      message: 'Минерал успешно создан',
      status: 200
    }
    
  } catch (error: Error | unknown) {

        if (error instanceof Error) {
           console.error(`Ошибка получения минералов ${error.message}`)
           return {
             message: 'Ошибка создания минерала',
             status: 500
           }
        }

        console.log(error)
        return {
          message: 'Ошибка создания минерала',
          status: 500
        }


    }
}