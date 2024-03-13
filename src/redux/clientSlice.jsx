import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { axiosInstance } from "../Service/AxiosInstance"

export const getClient=createAsyncThunk('client',async()=>{
    const res= await axiosInstance.get(`api/team`)
    console.log(res)
    return res?.data
})

const initialState={
    res:[],
    status:'idle'
}

const clientSlice=createSlice({
   name:'client',
   initialState,
   reducers:{},
   extraReducers:(builder)=>{
    builder
    .addCase(getClient.pending,(state,action)=>{
        state.status = 'loading'
    })
    .addCase(getClient.fulfilled,(state,action)=>{
        state.res=action.payload
        state.status = 'idle'
    })
    .addCase(getClient.rejected,(state,action)=>{
        state.status = 'error'
    })
   } 
})

export default clientSlice.reducer