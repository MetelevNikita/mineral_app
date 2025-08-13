import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../slice/userSlice";

// mineral

import mineralReducer from "../slice/mineralSlice";


export const store = configureStore({
  reducer: {
    user: userReducer,
    // 
    minerals: mineralReducer 
  },
  devTools: process.env.NODE_ENV !== 'production',
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;