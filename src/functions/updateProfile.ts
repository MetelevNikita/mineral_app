export const updateProfile = async (data: any) => {

    try {


        const id = sessionStorage.getItem('userID')
        if (!id) return

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
        console.log(res)
        console.log('Response from server:', res);
        
    } catch (error) {
        console.error('Error updating profile:', error);
        throw error; // Re-throw the error to handle it in the calling function
    }
}