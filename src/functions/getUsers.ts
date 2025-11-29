export const getUsers = async () => {
  try {

    const responce = await fetch('/api/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }) 
    
    if (!responce.ok) {
        console.error(`Ошибка получения пользователей ${responce.status} ${responce.statusText}`)
        throw new Error(responce.statusText)
    }
    
    const data = await responce.json()
    return data
    
  } catch (error: Error | unknown) {
    if (error instanceof Error) {
            console.error(`Ошибка получения пользователей: ${error.message}`)
            return {
                message: error.message,
                status: 500
            }
        }
    
  }
}