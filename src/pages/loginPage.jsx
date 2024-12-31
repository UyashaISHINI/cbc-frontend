import { Link } from "react-router-dom";

export default function LoginPage() {
    return (
        <div className="flex justify-center items-center w-full h-screen bg-slate-400">
            <div className="w-[400px] h-[400px] bg-slate-600 flex flex-col justify-center items-center">
                <img src="/logo.png" className="rounded-full w-[100px]"/>
                <span>Email</span>
                <input/>
                <span>Password</span>
                <input type="password"/>
                <button className="bg-white">Login</button>
            </div>
        </div>
    );
}

