import { createSlice } from "@reduxjs/toolkit";

// async

import { fetchGetAsyncMineral } from "@/functions/reduxAsync/mineral/fetchGetAsyncMineral";
import { fetchDeleteAsyncMineral } from "@/functions/reduxAsync/mineral/fetchDeleteAsyncMineral";

// type

import { MineralType } from "@/types/type";

interface MineralState {
    minerals: MineralType[]
}


const initialState: MineralState = {
    minerals: []
}



const mineralSlice = createSlice({
    name: 'mineral',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder

            // get all minerals

            .addCase(fetchGetAsyncMineral.fulfilled, (state, action) => {
                state.minerals = action.payload
            })

            // delete mineral

            .addCase(fetchDeleteAsyncMineral.fulfilled, (state, action) => {
                state.minerals = state.minerals.filter((mineral: MineralType) => {
                    return mineral.id !== action.payload
                })
            })


    }
})



const mineralReducer = mineralSlice.reducer
export default mineralReducer