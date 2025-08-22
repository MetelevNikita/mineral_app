import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../slice/userSlice";
import { statusReducer } from "../slice/statusSlice";
import { collectionReducer } from "../slice/collectionSlice";

// mineral

import mineralReducer from "../slice/mineralSlice";


export const store = configureStore({
  reducer: {
    user: userReducer,
    minerals: mineralReducer,
    status: statusReducer,
    collection: collectionReducer
  },
  devTools: process.env.NODE_ENV !== 'production',
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;