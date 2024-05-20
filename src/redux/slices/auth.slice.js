import { createSlice } from "@reduxjs/toolkit";
import { login } from "../actions/auth.action";
import { toast } from "react-toastify";
import { commonError } from "../../utils/error";

const authSlice=createSlice({
    name:'auth',
    initialState:{
        loading:false
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(login.pending,(state,action)=>{
            state.loading=true;
        })
        .addCase(login.rejected,(state,action)=>{
            state.loading=false;
            toast.error(commonError)
        })
        .addCase(login.fulfilled,(state,action)=>{
            state.loading=false;
            
        })
    }
})

export default authSlice.reducer;