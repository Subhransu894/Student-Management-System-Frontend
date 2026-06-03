import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import { Navigate } from 'react-router-dom'
import Navbar from "./component/Navbar"
import StudentView from './component/StudentView'
import StudentForm from './component/StudentForm'
import StudentDetails from './component/StudentDetails'
import ClassView from './component/ClassView'
import SchoolView from './component/SchoolView'
import Auth from "./component/Auth"
import ProtectedRoute from './component/ProtectedRoute'
import { useSelector } from 'react-redux'

function App() {
  const {isAuthenticated} = useSelector((state)=>state.auth)
  return (
    <Router>
      {isAuthenticated && <Navbar />}
      <Routes>
        <Route path="/login" element={isAuthenticated ? <Navigate to="/students"/> : <Auth/>}/>
        <Route path="/register" element={isAuthenticated ? <Navigate to="/students"/> :<Auth/>}/>
        {/* default route */}
        <Route path="/" element={<Navigate to="/login" />} />
        {/* protected routes */}
        <Route path="/students" element={<ProtectedRoute><StudentView/></ProtectedRoute>} />
        <Route path="/add-student" element={<ProtectedRoute><StudentForm/></ProtectedRoute>}/>
        <Route path="/edit-student" element={<ProtectedRoute><StudentForm/></ProtectedRoute>} />
        <Route path="/details/:id" element={<ProtectedRoute><StudentDetails /></ProtectedRoute>} />
        <Route path="/classes" element={<ProtectedRoute><ClassView/></ProtectedRoute>}/>
        <Route path="/schools"element={<ProtectedRoute><SchoolView/></ProtectedRoute>}/> 
      </Routes>
    </Router>
  )
}

export default App
