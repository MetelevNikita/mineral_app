import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsersChangeTotal = createAsyncThunk(
    'users/fetchUsersChangeTotal',

    async ({userId, total} : {userId: string, total: string | number}) => {

        try {


        const responce = await fetch(`/api/users/${userId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({total})
            
        })


        if (!responce.ok) {
            if (responce.status === 404) {
                throw new Error(`Ошибка запроса на сервер - обновления данных баллов ${responce.status}`)
            }
        }


        const data = await responce.json()
        return data
            
        } catch (error: Error | unknown) {

            if (error instanceof Error) {
                console.error('Ошибка при обновлении данных баллов', error.message)
                return `Ошибка при обновлении данных баллов ${error.message}`
            }

            console.error(error)
            return error
            
        }

    }
)