



export const createUser = async (user: any) => {
    try {


        const { name, email, password, confirmPassword, politic } = user

        if (name == '' || email == '' || password == '') {
            alert('Поля должны быть заполнены')
            throw new Error('Поля должны быть заполнены')
        }

        console.log(politic)
    

        if (!politic) {
            alert('Вы должны согласиться с политикой конфиденциальности')
            throw new Error('Вы должны согласиться с политикой конфиденциальности')
        }


        if (password !== confirmPassword) {
            alert('Пароли не совпадают')
            throw new Error('Пароли не совпадают')
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
        window.location.href = '/auth/responce'



    } catch (error: Error | unknown) {

        if (error instanceof Error) {
            console.log(`Ошибка регистрации пользователя: ${error.message}`)
        }
        
    }
}