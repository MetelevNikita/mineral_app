import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchGetCollectionMineral = createAsyncThunk(
    'mineral/fetchGetCollectionMineral',
    async () => {

      try {

        const responce = await fetch('/api/collection', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        })

        if (!responce.ok) {
          if (responce.status === 404) {
            throw new Error(`Ошибка запроса на сервер - получения коллекции минералов ${responce.status}`)
          }
        }

        const data = await responce.json()
        return data
        
      } catch (error: Error | unknown) {
        if (error instanceof Error) {
          console.error('Ошибка при получении данных коллекции', error.message)
          return `Ошибка при получении данных коллекции ${error.message}`
        }

        console.error(`Ошибка при получении данных коллекции ${error}`)
        throw new Error(
          `Ошибка при получении данных коллекции ${error}`
        )
        
      }



    }
)