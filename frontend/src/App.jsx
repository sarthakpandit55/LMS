import React from 'react'
import Home from './Pages/Home'
import {Routes, Route, Navigate} from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import {ToastContainer} from "react-toastify";
import getCurrentUser from './customHooks/getCurretnUser.js'
import { useSelector } from 'react-redux'
import Profile from './Pages/Profile.jsx'
import ForgetPassword from './Pages/ForgetPassword.jsx'
import EditProfile from './Pages/EditProfile.jsx'
import Dashboard from './Pages/Educator/Dashboard.jsx'
import Courses from './Pages/Educator/Courses.jsx'
import CreateCourses from "./Pages/Educator/CreateCourses.jsx"
import EditCourses from "./Pages/Educator/EditCourses.jsx"
import getCreatorCourse from './customHooks/getCreatorCourse.js'
import getPublishedCourse from './customHooks/getPublishedCourse.js'
import AllCourses from './Pages/Educator/AllCourses.jsx'
import CreateLecture from './Pages/Educator/CreateLecture.jsx'
import EditLecture from './Pages/Educator/EditLecture.jsx'
export const serverUrl = "http://localhost:8000"

const App = () => {
  getCurrentUser()
  getCreatorCourse()
  getPublishedCourse()
  const {userData} = useSelector(state=>state.user)

  return (
    <>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={!userData ? <Signup/> : <Navigate to={"/"}/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={userData ? <Profile/> : <Navigate to={"/signup"}/>}/>
        <Route path='/forget' element={userData ? <ForgetPassword/> : <Navigate to={"/signup"}/>}/>
        <Route path='/editprofile' element={userData ? <EditProfile/> : <Navigate to={"/signup"}/>}/>
        <Route path='/allcourses' element={userData ? <AllCourses/> : <Navigate to={"/signup"}/>}/>

        {/* educator */}
        <Route path='/dashboard' element={userData?.role === "educator" ? <Dashboard/> : <Navigate to={"/signup"}/>}/>
        <Route path='/courses' element={userData?.role === "educator" ? <Courses/> : <Navigate to={"/signup"}/>}/>
        <Route path='/createcourses' element={userData?.role === "educator" ? <CreateCourses/> : <Navigate to={"/signup"}/>}/>
        <Route path='/editcourses/:courseId' element={userData?.role === "educator" ? <EditCourses/> : <Navigate to={"/signup"}/>}/>

        <Route path='/createlecture/:courseId' element={userData?.role === "educator" ? <CreateLecture/> : <Navigate to={"/signup"}/>}/>
        <Route path='/editlecture/:courseId/:lectureId' element={userData?.role === "educator" ? <EditLecture/> : <Navigate to={"/signup"}/>}/>
      </Routes>
    </>
  )
}

export default App
