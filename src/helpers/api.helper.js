import axios from "axios";
const BASE_URL=import.meta.env.VITE_API_BASE_URL;
const token=localStorage.getItem('token') || 'aaaaaaa';
const api=axios.create({
    baseURL:BASE_URL,
    headers:{
        "Content-Type":"application/json"
    }
})

api.interceptors.request.use((config)=>{
    config.headers['Authorization']=token;
    config.headers['token']='hjreijhiehr'
    return config;
})
api.interceptors.response.use((response)=>{
    const data=response.data;
    return data;
},(error)=>{
    const data=error.response.data;
    return Promise.reject(data);
})

export default api;