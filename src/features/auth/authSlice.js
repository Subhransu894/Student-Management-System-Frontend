import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk("auth/registerUser",async(userData,{rejectWithValue})=>{
    try {
        const response = await axios.post("https://student-management-system-backend-u5xo.onrender.com/register",userData)
        console.log(response)
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Registration Failed")
    }
})
export const loginUser = createAsyncThunk("auth/loginUser",async(userData,{rejectWithValue})=>{
    try {
        const response = await axios.post("https://student-management-system-backend-u5xo.onrender.com/login",userData)
        console.log(response);
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Login Failed")
    }
})

const initialState ={
    user:null,
    token: localStorage.getItem("token") || null,
    isAuthenticated: !!localStorage.getItem("token"),
    status:"idle",
    error:null,
}
const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        logout: (state)=>{
            state.user = null;
            state.token=null;
            state.isAuthenticated=false;

            localStorage.removeItem("token")
        }
    },
    extraReducers: (builder)=>{
        // register
        builder.addCase(registerUser.pending,(state)=>{
            state.status = "Loading"
            state.error = null
        })
        builder.addCase(registerUser.fulfilled,(state)=>{
            state.status = "succeeded"
            state.error = null
        })
        builder.addCase(registerUser.rejected,(state,action)=>{
            state.status="failed";
            state.error = action.payload
        })
        //login
        builder.addCase(loginUser.pending,(state)=>{
            state.status = "loading"
        })
        builder.addCase(loginUser.fulfilled,(state,action)=>{
            state.status = "succeeded"
            state.error = null;

            state.token = action.payload.token;
            state.user = action.payload.username;
            state.isAuthenticated = true;

            localStorage.setItem("token",action.payload.token)
        })
        builder.addCase(loginUser.rejected,(state,action)=>{
            state.status = "failed";
            state.error = action.payload
        })
    }
})
export const {logout} = authSlice.actions;
export default authSlice.reducer;