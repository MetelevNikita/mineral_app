



export const createUser = async (user: any) => {
    try {


        const { name, email, password, confirmPassword, politic } = user

        if (name == '' || email == '' || password == '') {
            return {
                message: 'empty field',
                succes: false,
                status: 400
            }
        }

    

        if (!politic) {
            return {
                message: 'politic',
                succes: false,
                status: 400
            }
        }


        if (password !== confirmPassword) {
            return {
                message: 'password repeat',
                succes: false,
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
                console.log(`${responce.status} ${responce.statusText}`)
                throw new Error(responce.statusText)
            }
        }

        const data = await responce.json()
        console.log(data)
        return {
            message: data.message,
            success: true,
            status: 200
        }



    } catch (error: Error | unknown) {

        if (error instanceof Error) {
            console.log(`Ошибка регистрации пользователя: ${error.message}`)
        }
        
    }
}