import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchGetStatus = createAsyncThunk(
    'name/fetchGetStatus',
    async () => {
      const responce = await fetch('/api/status', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })

      if (!responce.ok) {
        if (responce.status === 404) {
          throw new Error(`Ошибка запроса на сервер - получения статуса ${responce.status}`)
        }

        throw new Error(
          `Ошибка запроса на сервер - получения статуса ${responce.status}`
        )
      }


      const data = await responce.json()
      return data

    }
)