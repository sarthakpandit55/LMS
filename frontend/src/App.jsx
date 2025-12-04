import React from 'react'
import Home from './Pages/Home'
import {Routes, Route, Navigate} from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import {ToastContainer} from "react-toastify";
import getCurrentUser from './customHooks/getCurretnUser.js'
import { useSelector } from 'react-redux'
import Profile from './Pages/Profile.jsx'
export const serverUrl = "http://localhost:8000"

const App = () => {
  getCurrentUser()
  const {userData} = useSelector(state=>state.user)

  return (
    <>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={!userData ? <Signup/> : <Navigate to={"/"}/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={userData ? <Profile/> : <Navigate to={"/signup"}/>}/>
      </Routes>
    </>
  )
}

export default App
