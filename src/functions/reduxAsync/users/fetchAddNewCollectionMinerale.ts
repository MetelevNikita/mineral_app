import { createAsyncThunk } from "@reduxjs/toolkit";

// types

import {CollectionMineralType} from '@/types/type'


export const fetchAddNewCollectionMinerale = createAsyncThunk(
  'name/fetchAddNewCollectionMinerale',
  async ({id, mineral} : {id: string | number, mineral: CollectionMineralType | []}) => {
    try {

      const responce = await fetch(`/api/users/${id}`, {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json'
        },
        body: JSON.stringify({mineral})
      })

      if (!responce.ok) {
        if (responce.status === 404) {
          throw new Error(`Ошибка запроса на сервер - добавления нового минерала ${responce.status}`)
        }
      }

      const data = await responce.json()
      return data
      
    } catch (error: Error | unknown) {

      if (error instanceof Error) {
        console.error('Ошибка при добавлении нового минерала' + error.message)
        return `Ошибка при добавлении нового минерала ${error.message}`
      }

      console.error(
        `Ошибка при добавлении нового минерала ${error}`
      )
      return `Ошибка при добавлении нового минерала ${error}`

    }
  }
)