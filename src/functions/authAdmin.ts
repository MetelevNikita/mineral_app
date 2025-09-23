export const authAdmin = async (formData: FormData) => {

    try {



        const email = formData.get('email') as string
        const password = formData.get('password') as string
        const remember = formData.get('remember') as string




        const response = await fetch('/api/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })

        if (!response.ok) {
            throw new Error(response.statusText)
   
        }

        if (response.status === 200) {

            const data = await response.json()
            if (remember) {
                localStorage.setItem('token', JSON.stringify(data.accessToken))
            }

            if (data.admin) {
                window.location.href = '/admin/dashboard'

            } else {
                alert(
                    'Вы не являетесь администратором'
                )

                window.location.href = '/admin'
            }
            
        }


    } catch (error: Error | unknown | any) {

        if (error instanceof Error) {
            console.log(`Ошибка авторизация админ панели: ${error.message}`)
        }

        
        
    }

}