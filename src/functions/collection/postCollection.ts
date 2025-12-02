export const postCollection = async (formData: FormData) => {
  try {


    console.log(...formData)

    const response = await fetch('/api/collection', {
      method: 'POST',
      body: formData
    })

    // if (!response.ok) {
    //   throw new Error(`Ошибка добавления коллекции минералов ${response.status}`)
    // }

    const data = await response.json()
    return {
        message: 'Миенерал в коллекцию успешно создан',
        data: 'sucess',
        status: 200
    }
    
  } catch (error: Error | unknown) {
    if (error instanceof Error) {
            console.error(`Ошибка создания коллекции минералов: ${error.message}`)
            return {
                message: error.message,
                data: 'error',
                status: 500
            }
        }
    
  }
}