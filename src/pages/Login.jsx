import { useEffect } from "react";
import api from "../helpers/api.helper";

const Login = () => {
  const  fetchData=async()=>{
    try{
      const data=await api.get('/users');
      console.log('data',data);
    }catch(error){
      console.log('error',error)
    }
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <>
      <h2>Login Page</h2>  
    </>
  )
}

export default Login;
