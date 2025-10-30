



export const createUser = async (user: any) => {
    try {

        const { name, email, password, confirmPassword, politic } = user

        if (name == '' || email == '' || password == '') {
            return {
                message: 'Не заполнены поля',
                status: 400
            }
        }

        if (!politic) {
            return {
                message: 'Не активировано соглашение',
                status: 400
            }
        }

        if (password !== confirmPassword) {
            return {
                message: 'Пароли не совпадают',
                status: 400
            }
        }


        const responce = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        })


        if (!responce.ok) {
            if (responce.status === 409) {
                alert('Пользователь с таким email уже существует')
            } else {
                console.error(`${responce.status} ${responce.statusText}`)
                throw new Error(responce.statusText)
            }
        }

        const data = await responce.json()
        console.log(data)
        return data


    } catch (error: Error | unknown) {

        if (error instanceof Error) {
            console.error(`Ошибка регистрации пользователя: ${error.message}`)
            return {
                message: error.message,
                status: 500
            }
        }
        
    }
}