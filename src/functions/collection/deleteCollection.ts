export const deleteCollection = async (id: number | string) => {
  try {

    console.log(id)

    const responce = await fetch(`/api/collection/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!responce.ok) {
      console.error(
        `Ошибка удаления коллекции минералов ${responce.status} ${responce.statusText}`
      )
    }

    const data = await responce.json()
    return {
        message: 'Миенерал удален из коллекции',
        data: 'sucess',
        status: 200
    }
    
  } catch (error: Error | unknown) {
    if (error instanceof Error) {
            console.error(`Ошибка удаления коллекции минералов: ${error.message}`)
            return {
                message: 'Миенерал не удален из коллекции',
                data: 'error',
                status: 200
            }
        }
    
  }
}