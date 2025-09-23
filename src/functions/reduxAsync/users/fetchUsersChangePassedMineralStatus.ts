import { createAsyncThunk } from "@reduxjs/toolkit";



export const fetchUsersChangePassedMineralStatus = createAsyncThunk(
    'users/fetchUsersChangePassedMineralStatus',
    async ({idUser, idMineral, isPassed}: {idUser: string | number, idMineral: string | number, isPassed: boolean | string}) => {
      try {

        const responce = await fetch(`/api/users/${idUser}`, {
          method: "PATCH",
          headers: {
            'content-type': 'application/json',
          },

          body: JSON.stringify({idMineral, isPassed})
        })

        if (!responce.ok) {
          if (responce.status === 404) {
            throw new Error(`Ошибка запроса на сервер - обновления статуса пройденного минерала ${responce.status}`)
          }
        }

        const data = await responce.json()
        return data


        
      } catch (error: Error | unknown) {
        if (error instanceof Error) {
          console.error(`Ошибка обновления статуса пройденного минерала ${error.message}`)
          throw new Error(
            `Ошибка обновления статуса пройденного минерала ${error.message}`
          )
        }

        console.error(`Ошибка обновления статуса пройденного минерала ${error}`)
        throw new Error(
          `Ошибка обновления статуса пройденного минерала ${error}`
        )
        
      }
    }
)