
export const getStatus = async () => {
  try {

    const responce = await fetch('/api/status', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!responce.ok) {
      console.error(`Ошибка получения статуса ${responce.status} ${responce.statusText}`)
      return {
        message: 'Статусы не получены',
        data: 'error',
        status: 200
      }
    }


    const data = await responce.json()
    return data
    
  } catch (error: Error | unknown) {
    if (error instanceof Error) {
            console.error(`Ошибка получения статусов: ${error.message}`)
            return {
                message: 'Статусы не получены',
                data: 'error',
                status: 200
            }
        }
    
  }
}