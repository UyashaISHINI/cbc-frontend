import axios, { Axios } from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function LoginPage() {

    const [email,setEmail]= useState("Your email")
    const [password,setPassword]=useState("")

    function login(){
        axios.post("http://localhost:5000/api/users/login",{
        email:email,password :password}).then(
            (res)=>{
                console.log(res)
                if(res.data.user == null){
                    toast.error(res.data.message)
                    return
                }
                toast.success("Login success")
                localStorage.setItem("token",res.data.token)
                if(res.data.user.type=="admin"){
                    window.location.href = "/admin"
                }else{
                    window.location.href - "/"
                }
            }
        )
    }

    return (
        <div className="flex justify-center items-center w-full h-screen bg-slate-400">
            <div className="w-[400px] h-[400px] bg-slate-600 flex flex-col justify-center items-center">
                <img src="/logo.png" className="rounded-full w-[100px]"/>
                <span>Email</span>
                <input defaultValue={email} onChange={(e)=>{
                    setEmail(e.target.value)
                }}/>
                <span>Password</span>
                <input type="password" defaultValue={password} onChange={(e)=>{
                    setPassword(e.target.value)
                }}/>
                <button onClick={login} className="bg-white">Login</button>
            </div>
        </div>
    );
}

