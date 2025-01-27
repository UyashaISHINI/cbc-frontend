import { useState } from 'react'
import './App.css'
import ProductCard from './components/productCard'
import LoginPage from './pages/loginPage'
import HomePage from './pages/homePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminHomePage from './pages/adminHomePage'
import SignUpPage from './pages/signUpPage'
import { Toaster } from 'react-hot-toast'
import { GoogleOAuthProvider } from '@react-oauth/google'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-primary'>
      <BrowserRouter>

        <Toaster position='top-right' />
        <GoogleOAuthProvider clientId='770380618448-403bm74pd06s4c4j76p5fur8p75bkdk5.apps.googleusercontent.com'>
        <Routes path="/*">
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/admin/*" element={<AdminHomePage />} />
          <Route path="/*" element={<HomePage />} />
        </Routes>
        </GoogleOAuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
