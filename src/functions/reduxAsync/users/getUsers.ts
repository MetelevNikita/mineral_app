import { createAsyncThunk } from "@reduxjs/toolkit";


export const getUsers = createAsyncThunk(
  'user/getUsers',
  async () => {
    try {
      const response = await fetch('/api/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Запрос не удался');
      }
      const data = await response.json();
      return data; //
    } catch (error: Error | any) {
        
        if (error instanceof Error) {
            console.error('Ошибка получения пользователей:', error.message);
            return error.message;
        }
      return error;
    }
  }
);