import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGetAsyncMineral = createAsyncThunk(
    'name/fetchGetAsyncMineral',

    async () => {
        try {


            const responce = await fetch('/api/mineral', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })


            if (!responce.ok) {
                if (responce.status === 404) {
                    throw new Error(`Ошибка запроса на сервер - получения менералов ${responce.status}`)
                }
            }


            const data = await responce.json()
            console.log(data)
            return data



            
        } catch (error: Error | unknown) {

            if (error instanceof Error) {
                console.error('Ошибка при получении данных', error.message)
                return `Ошибка при получении данных ${error.message}`
            }

            console.error(error)
            return error
            
        }
    }
)