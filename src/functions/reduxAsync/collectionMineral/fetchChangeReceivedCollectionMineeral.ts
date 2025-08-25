import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchChangeReceivedCollectionMineeral = createAsyncThunk(
  'name/fetchChangeReceivedCollectionMineeral',
  async ({id: id, received: received}: {id: string, received: boolean}) => {
    try {

      console.log(received)
      console.log(id)

      const responce = await fetch(`/api/collection/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({received})
      })

      if (!responce.ok) {
        if (responce.status === 404) {
          throw new Error(`Ошибка запроса на сервер - получения статуса ${responce.status}`)
        }
      }

      const data = await responce.json()
      console.log(data)
      return data
      
    } catch (error: Error | unknown) {
      if (error instanceof Error) {

        console.error(`Ошибка обновления данных получения минерала в коллекцию ${error}`)
        throw new Error(
          `Ошибка обновления данных получения минерала в коллекцию ${error}`
      )

      }
        console.error(`Ошибка обновления данных получения минерала в коллекцию ${error}`)
        throw new Error(
          `Ошибка обновления данных получения минерала в коллекцию ${error}`
        )
    }
  }
)