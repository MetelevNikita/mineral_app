import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGetMineralMap = createAsyncThunk(
    'mineral/fetchGetMineralMap',
    async () => {
      try {

        const responce = await fetch('/api/map', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        })

        if (!responce.ok) {
          if (responce.status === 404) {
            throw new Error(
              `Ошибка запроса на сервер - получения коллекции минералов с карты ${responce.status}`
            )
          }
        }

        const data = await responce.json()
        return data

        
      } catch (error: Error | unknown) {
        if (error instanceof Error) {
          console.error(
            `Ошибка при получении коллекции минералов с карты ${error.message}`
          )
        }
        console.error(`Ошибка при получении коллекции минералов с карты ${error}`)
        return error
      }
    }
)