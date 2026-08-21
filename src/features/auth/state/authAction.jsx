import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/api";
import { toast } from "react-toastify";

export const loginUserAction = createAsyncThunk("/auth/login", async(credentials, thunkApi)=>{
    try {
        let res = await api.post("/auth/login",credentials)
        let token =  res.data.accessToken 
        localStorage.setItem("accessToken",token )
        toast.success("User Login successfully")
        return res.data
        

    } catch {
        toast.error("Login failed")
        return thunkApi.rejectWithValue("login failed")
    }
})


export const hydrateUserAction = createAsyncThunk("/auth/hydrate", async(_,thunkApi)=>{
    let token = localStorage.getItem("accessToken")
    try {
        let res= await api.get("/auth/me",{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        })
        return res.data
    } catch {
        toast.error("unauthorized User")
        return thunkApi.rejectWithValue("hydration failed")
    }
})

export const registerUserAction = createAsyncThunk("/auth/register", async(userData, thunkApi)=>{
    try {
        let res = await api.post("/users/add", {
            firstName: userData.username,
            email: userData.email,
            password: userData.password,
        })
        toast.success("Account created successfully! Please login.")
        return res.data
    } catch {
        toast.error("Registration failed. Please try again.")
        return thunkApi.rejectWithValue("registration failed")
    }
})