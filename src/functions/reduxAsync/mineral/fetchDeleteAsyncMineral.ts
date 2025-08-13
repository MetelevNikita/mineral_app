import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchDeleteAsyncMineral = createAsyncThunk(
    'name/fetchDeleteAsyncMineral',
    async (id: string) => {
        try {


            const responce = await fetch(`/api/mineral/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })

            if (!responce.ok) {
                if (responce.status === 404) {
                    throw new Error(`Ошибка запроса на сервер - удаления минерала ${responce.status}`)
                }
            }


            const data = await responce.json()
            return data

            
        } catch (error: Error | unknown) {

        if (error instanceof Error) {
            console.error(`Не удалось удалить выбранный минерал ${error.message}`)
        }

        console.error(error)
    }
    }
)