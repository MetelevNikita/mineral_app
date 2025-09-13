import { createSlice } from "@reduxjs/toolkit";

// types

import { MineralMapType } from "@/types/type";

// async

import { fetchGetMineralMap } from "@/functions/reduxAsync/map/fetchGetMineralMap";

// 

interface initialState {
  map: MineralMapType[]
}

const initialState: initialState = {
  map: []
}

const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetMineralMap.pending, (state, action) => {
        if (state.map.length > 0) {
          state.map = []
        }
      })
      .addCase(fetchGetMineralMap.fulfilled, (state, action) => {
        state.map = action.payload
      })

      .addCase(fetchGetMineralMap.rejected, (state, action) => {
        if (state.map.length > 0) {
          state.map = []
        }
      })
  }

})


export const mapReducer = mapSlice.reducer
