import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsersChangeFirstVisible = createAsyncThunk(
    'users/fetchUsersChangeFirstVisible',

    async ({userId, visible}: {userId: string, visible: boolean}) => {

      try {
        const responce = await fetch(`/api/users/${userId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({visible})
        })

        if (!responce.ok) {
          if (responce.status === 404) {
            throw new Error(
              `Ошибка запроса на сервер - обновления данных первого посещения ${responce.status}`
            )
          }
        }


        const data = await responce.json()
        return data
        
        
      } catch (error: Error | unknown) {
        if (error instanceof Error) {
          console.error(
            `Ошибка при обновлении данных первого посещения ${error.message}`,
          )
          throw new Error(
            `Ошибка при обновлении данных первого посещения ${error.message}`
          )
        }
      }

    }
)