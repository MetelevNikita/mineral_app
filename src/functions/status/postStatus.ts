export const postStatus = async (fomrData: FormData) => {

  try {


    const responce = await fetch('/api/status', {
        method: 'POST',
        body: fomrData
    })

    if (!responce.ok) {
        console.error(`Ошибка создания статуса ${responce.status} ${responce.statusText}`)
    }

    const data = await responce.json()
    return {
        message: 'Статус создан',
        data: 'sucess',
        status: 200
    }


    
  } catch (error: Error | unknown) {
    if (error instanceof Error) {
            console.error(`Ошибка создания статуса: ${error.message}`)
            return {
                message: 'Статус не создан',
                data: 'error',
                status: 200
            }
        }
    
  }

}