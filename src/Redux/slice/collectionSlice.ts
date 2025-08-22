import { createSlice } from "@reduxjs/toolkit";

// types

import { CollectionMineralType } from "@/types/type";

// async

import { fetchGetCollectionMineral } from "@/functions/reduxAsync/collectionMineral/fetchGetCollectionMineral";



interface initialState {
    collection: CollectionMineralType[] | []
}


const initialState: initialState = {
    collection: []
}


const collectionSlice = createSlice({
    name: 'collection',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(fetchGetCollectionMineral.fulfilled, (state, action) => {
            state.collection = action.payload
          })
    }
})


export const collectionReducer = collectionSlice.reducer
