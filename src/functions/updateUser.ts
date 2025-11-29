export const updateUser = async (id: number | string, blocked: string) => {
  try {

    const responce = await fetch(`/api/users/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({blocked: blocked})
    })

    // if (!responce.ok) {
    //   console.error(
    //     `Ошибка обновления статуса блокировки: ${responce.status} ${responce.statusText}`
    //   )
    //   throw new Error(
    //     `Ошибка обновления статуса блокировки: ${responce.status} ${responce.statusText}`
    //   )
    // }

    const data = await responce.json()
    return data
    
  } catch (error: Error | unknown) {
    if (error instanceof Error) {
            console.error(`Ошибка обновления статуса блокировки: ${error.message}`)
            return {
                message: error.message,
                status: 500
            }
        }
  }
}