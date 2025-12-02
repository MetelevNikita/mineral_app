export const patchStatus = async (formData: FormData, id: string | number) => {
  try {

    const responce = await fetch(`/api/status/${id}`, {
        method: 'PATCH',
        body: formData
    })

    if (!responce.ok) {
      console.error(`Ошибка изменения статуса ${responce.status} ${responce.statusText}`)
      return {
        message: 'Статус не изменен',
        data: 'error',
        status: 200
      }
    }

    const data = await responce.json()
    return {
      message: 'Статус изменен',
      data: 'sucess',
      status: 200
    }

    
  } catch (error: Error | unknown) {
    if (error instanceof Error) {
            console.error(`Ошибка изменения статуса: ${error.message}`)
            return {
                message: 'Статус не изменен',
                data: 'error',
                status: 200
            }
        }
    
  }
}