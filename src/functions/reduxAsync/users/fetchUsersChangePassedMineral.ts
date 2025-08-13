import { createAsyncThunk } from "@reduxjs/toolkit";

// 


export const fetchUsersChangePassedMineral = createAsyncThunk(
    'users/fetchUsersChangePassedMineral',

    async ({userId, passed} : {userId: string, passed: {title: string, isPassed: boolean}}): Promise<any> => {
      const responce = await fetch(`/api/users/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({passed})
      })

        if (!responce.ok) {
          if (responce.status === 404) {
            throw new Error(`Ошибка запроса на сервер - обновления данных прохождения квиза ${responce.status}`)
          }
        }
        
        const data = await responce.json()
        console.log(data)
        return data

      }

      
    
        





)