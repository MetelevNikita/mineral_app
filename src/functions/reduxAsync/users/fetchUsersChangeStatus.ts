import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsersChangeStatus = createAsyncThunk(
    'users/fetchUsersChangeStatus',
    async ({userId, status}: {userId: string, status: string}) => {

      try {

        console.log(status)

        const responce = await fetch(`/api/users/${userId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({status})
          })

          if (!responce.ok) {
            if (responce.status === 404) {
              throw new Error(`Ошибка запроса на сервер - обновления статуса ${responce.status}`)
            }
          }

          const data = await responce.json()
          return data



        
      } catch (error: Error | unknown) {

        if (error instanceof Error) {
          console.log(`Ошибка получения статуса ${error.message}`)
          throw new Error(
            `Ошибка получения статуса ${error.message}`
          )
        }
      }
    }
)