export const createQuestions = async (geokviz: FormData, id: string | number): Promise<{message: string, status: number}> => {
  try {

      const responce = await fetch(`/api/mineral/${id}`, {
        method: 'POST',
        body: geokviz
      })

      if (!responce.ok) {
        throw new Error(
          `Ошибка создания вопросов ${responce.status}`
        )
      }

      const data = await responce.json()
      console.log(data)
      return {
        message: 'Вопросы успешно созданы',
        status: 200
      }


    
  } catch (error: Error | unknown) {
    if (error instanceof Error) {
      console.error(
        `Ошибка создания вопросов: ${error.message}`
      )
      return {
        message: `Ошибка создания вопросов`,
        status: 500
      }
    }

    console.error(
      `Ошибка создания вопросов: ${error}`
    )

    return {
      message: `Ошибка создания вопросов`,
      status: 500
    }
    
  }
}