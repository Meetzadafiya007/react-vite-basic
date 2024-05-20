import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import api from "../../helpers/api.helper";

const login = createAsyncThunk("LOGIN", async (values) => {
    try{
        const data=await api.post('',values);
        return data;
    }catch(error){
        toast.error()
    }
});

export { login };
