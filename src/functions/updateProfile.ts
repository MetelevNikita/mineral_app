export const updateProfile = async (data: any) => {

    try {


        const id = localStorage.getItem('userID')
        if (!id) {
            return {
                success: false,
                message: `Не найден id пользователя`
            }
        }

        const formData = new FormData()
        formData.append('userId', id)

        // добавляем поля вручную
        formData.append('age', data.age)
        formData.append('profession', data.profession)
        formData.append('bio', data.bio)
        formData.append('phone', data.phone)
        formData.append('telegram', data.telegram)

        // добавляем файл (если он есть)
        if (data.avatar) {
        formData.append('avatar', data.avatar)
        }


        const responce = await fetch('/api/profile', {
            method: 'PUT',
            body: formData
        })


        const res = await responce.json();
        return {
            success: true,
            message: `Данные пользователя обновлены`
        }


        
    } catch (error) {
        console.error('Ошибка обновления пользователя ', error);
        return {
            success: true,
            message: `Ошибка обновления пользователя ${error}`
        }
    }
}