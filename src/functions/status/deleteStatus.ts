export const deleteStatus = async (id: string | number) => {
  try {

    const responce = await fetch(`/api/status/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!responce.ok) {
      console.error(`Ошибка удаления статуса ${responce.status} ${responce.statusText}`)
      return {
        message: 'Статус не удален',
        data: 'error',
        status: 400
      }
    }


    const data = responce.json()
    return {
      message: 'Статус удален',
      data: 'sucess',
      status: 200
    }
    
  } catch (error: Error | unknown) {
    if (error instanceof Error) {
            console.error(`Ошибка удаления статуса: ${error.message}`)
            return {
                message: 'Статус не удален',
                data: 'error',
                status: 200
            }
        }

        return {
            message: 'Статус не удален',
            data: 'error',
            status: 200
        }
    
  }
}