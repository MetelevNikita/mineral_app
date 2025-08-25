import { createSlice } from "@reduxjs/toolkit";

// types

import { CollectionMineralType } from "@/types/type";

// async

import { fetchGetCollectionMineral } from "@/functions/reduxAsync/collectionMineral/fetchGetCollectionMineral";
import {fetchChangeReceivedCollectionMineeral} from "@/functions/reduxAsync/collectionMineral/fetchChangeReceivedCollectionMineeral"



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

          .addCase(fetchChangeReceivedCollectionMineeral.fulfilled, (state, action) => {

                state.collection = state.collection.map((collection) => {
                    if (collection.id === action.payload.id) {
                        collection = {
                            ...collection,
                            received: true
                        }
                    }

                    return collection

          })
        })
    }



    
    
})


export const collectionReducer = collectionSlice.reducer
