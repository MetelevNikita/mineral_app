import { createAsyncThunk } from "@reduxjs/toolkit";

// types

import {CollectionMineralType} from '@/types/type'

// 

export const fetchChangeNewCollectionMineralReceived = createAsyncThunk(
    'mineral/fetchChangeNewCollectionMineralReceived',
    async ({idUser, idMineral}: {idUser: string | number, idMineral: string | number}) => {
      try {

        const responce = await fetch(`/api/users/${idUser}`, {
          method: 'PATCH',
          headers: {
            'Accept': 'application/json'
          },
          body: JSON.stringify({idMineral, received: true})
        })

        if (!responce.ok) {
          if (responce.status === 404) {
            throw new Error(`Ошибка запроса на сервер - обновления статуса полученного минерала ${responce.status}`)
          }
        }

        const data = await responce.json()
        return data
        
      } catch (error: Error | unknown) {

        if (error instanceof Error) {
          console.error('Ошибка при получении данных для обновления минерала в коллекции', error.message)
          return 'Ошибка при получении данных для обновления минерала в коллекции' + error.message
        }

        console.error('Unknown error', error)
        throw new Error(
          `Unknown error ${error}`
        )
        
      }
    }
)