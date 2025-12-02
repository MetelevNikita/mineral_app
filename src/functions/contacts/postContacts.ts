export const postContacts = async (formData: FormData) => {
  try {

    console.log('Полученные данные')
    console.log(...formData)

    //


    const responce = await fetch('/api/contacts', {
        method: 'PATCH',
        body: formData
    })

    if (!responce.ok) {
      console.error(`Ошибка изменения коллекции минералов: ${responce.status}`)
      return {
        message: `Ошибка изменения коллекции минералов ${responce.status}`,
        data: 'error',
        status: 500
      }
    }

    const data = await responce.json()
    return {
        message: 'Данные контактов успешно отправлены',
        data: 'sucees',
        status: 200
      }

    
  } catch (error: Error | unknown) {
    if (error instanceof Error) {
            console.error(`Ошибка получения коллекции минералов: ${error.message}`)
            return {
                message: error.message,
                data: 'error',
                status: 500
            }
        }
    
  }
}