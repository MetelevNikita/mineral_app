import { createSlice } from "@reduxjs/toolkit";

// types

import { StatusesType } from "@/types/type";

// async

import { fetchGetStatus } from "@/functions/reduxAsync/status/fetchGetStatus";


interface initialState {
  status: StatusesType[]
}

const initialState: initialState = {
  status: []
}


const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetStatus.fulfilled, (state, action) => {
        state.status = action.payload
      })
  }


})


export const statusReducer = statusSlice.reducer
