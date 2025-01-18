import { useState } from 'react'
import './App.css'
import ProductCard from './components/productCard'
import UserData from './components/UserData'
import LoginPage from './pages/loginPage'
import HomePage from './pages/homePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminHomePage from './pages/adminHomePage'
import SignUpPage from './pages/signUpPage'
import { Toaster } from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>

    <Toaster position='top-right'/>

    <Routes path="/*">
    <Route path ="/" element={<HomePage/>}/>
    <Route path ="/login" element={<LoginPage/>}/>
    <Route path = "/signUp" element={<SignUpPage/>}/>
    <Route path = "/admin/*" element={<AdminHomePage/>}/>
    <Route path ="/*"element={<HomePage/>}/>
    </Routes>
    </BrowserRouter>       
    </>
  )
}

export default App
