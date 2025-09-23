export const authUser = async (user: any) => {
    try {
        

    const {email, password, check} = user


    const responce = await fetch('/api/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
 
    })


    if (!responce.ok) {
        return {message: responce.statusText, auth: false}
    }

    const data = await responce.json()
    sessionStorage.setItem('userID', data.userId)
    return {message: data.message, auth: true}

        
    } catch (error: Error | unknown) {

        if (error instanceof Error) {
            console.error(error.message);
            return {message: error.message, auth: false}
        }
        
        
    }
}