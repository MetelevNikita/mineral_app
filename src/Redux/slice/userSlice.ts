import { createSlice } from "@reduxjs/toolkit";

// type

import { UserType } from "@/types/type";
import { CollectionMineralType } from "@/types/type";

// async

import { getUsers } from "@/functions/reduxAsync/users/getUsers";
import { fetchUsersChangeTotal } from "@/functions/reduxAsync/users/fetchUsersChangeTotal";
import { fetchUsersChangePassedMineral } from "@/functions/reduxAsync/users/fetchUsersChangePassedMineral";
import { fetchUsersChangeStatus } from "@/functions/reduxAsync/users/fetchUsersChangeStatus";
import { fetchUsersChangeFirstVisible } from "@/functions/reduxAsync/users/fetchUsersChangeFirstVisible";

// 

import { fetchAddNewCollectionMinerale } from "@/functions/reduxAsync/users/fetchAddNewCollectionMinerale";
import { fetchChangeNewCollectionMineralReceived } from "@/functions/reduxAsync/users/fetchChangeNewCollectionMineralReceived";

// 

interface UserState {
    user: UserType[]
}

const initialState: UserState = {
  user: []
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder

            // get all users

            .addCase(getUsers.fulfilled, (state, action) => {
                state.user = action.payload;
            })
 
            // change total

            .addCase(fetchUsersChangeTotal.fulfilled, (state, action) => {
                console.log(state.user)
                console.log(action.payload.id)

                state.user = state.user.map((user) => {
                    if (user.id === action.payload.id) {
                        return {
                            ...user,
                            total: action.payload.total
                        }
                    }

                    return user
                })
            })


            // passed mineral

            .addCase(fetchUsersChangePassedMineral.fulfilled, (state, action) => {
                state.user = state.user.map((user) => {
                    if (user.id === action.payload.id) {
                        return {
                            ...user,
                            passedMineral: action.payload.passedMineral
                        }
                    }
                    return user
                })
            })

            // change status

            .addCase(fetchUsersChangeStatus.fulfilled, (state, action) => {
                state.user = state.user.map((user) => {
                    if (user.id === action.payload.id) {
                        return {
                            ...user,
                            status: action.payload.status
                        }
                    }
                    
                    return user
                })   
            })


            // change first visit

            .addCase(fetchUsersChangeFirstVisible.fulfilled, (state, action) => {
                state.user = state.user.map((user) => {
                    if (user.id === action.payload.id) {
                        return {
                            ...user,
                            firstVisible: action.payload.visible
                        }
                    }
                    return user
                })
            })

            .addCase(fetchAddNewCollectionMinerale.fulfilled, (state, action) => {
                state.user = state.user.map((user) => {
                    if (user.id === action.payload.id) {
                
                            return {
                                ...user,
                                collection: action.payload.mineral
                            }
                        }
                      
                    return user
                })
            })
            .addCase(fetchChangeNewCollectionMineralReceived.fulfilled, (state, action) => {

                state.user = state.user.map((user: UserType | any) => {
                    if (user.id !== action.payload.idUser) {
                    return {
                            ...user,
                            collection: user.collection.map((mineral: CollectionMineralType) => {
                                if (mineral.id === action.payload.idMineral) {
                                    return {
                                        ...mineral,
                                        received: true
                                    }
                                }
                            })
                        }
                    }
                    return user
                })
            })
            
    }
});


export const userReducer = userSlice.reducer;