import {createSlice} from '@reduxjs/toolkit'
import { hydrateUserAction, loginUserAction, registerUserAction } from './authAction'


export const authSlice = createSlice({
    name:"auth",

    initialState:{
        user:null,
        isAuthenticated:false,
        isLoading:false
    },


    reducers:{
        logout:(state)=>{
            state.user = null
            state.isAuthenticated = false
            state.isLoading = false
        }
    },


    extraReducers:(builder)=>{
        builder

        .addCase(loginUserAction.pending, (state)=>{
            state.isLoading= true
        })
        .addCase(loginUserAction.fulfilled,(state,action)=>{
            state.user = action.payload
            state.isAuthenticated = true
            state.isLoading= false
        })
        .addCase(loginUserAction.rejected,(state)=>{
            state.isLoading = false
        })


        .addCase(hydrateUserAction.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(hydrateUserAction.fulfilled,(state,action)=>{
            state.user = action.payload
            state.isAuthenticated = true
            state.isLoading = false
        })
        .addCase(hydrateUserAction.rejected,(state)=>{
            state.isLoading= false
            state.isAuthenticated = false
        })

        .addCase(registerUserAction.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(registerUserAction.fulfilled,(state)=>{
            state.isLoading = false
        })
        .addCase(registerUserAction.rejected,(state)=>{
            state.isLoading = false
        })
    }

})


export const {logout} = authSlice.actions
export default authSlice.reducer