import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from "./component/Navbar"
import StudentView from './component/StudentView'
import StudentForm from './component/StudentForm'
import StudentDetails from './component/StudentDetails'
import ClassView from './component/ClassView'
import SchoolView from './component/SchoolView'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<StudentView/>} />
        <Route path="/students" element={<StudentView/>} />
        <Route path="/add-student" element={<StudentForm/>}/>
        <Route path="/edit-student" element={<StudentForm/>} />
        <Route path="/details/:id" element={<StudentDetails />} />
        <Route path="/classes" element={<ClassView/>}/>
        <Route path="/schools"element={<SchoolView/>}/>
      </Routes>
    </Router>
  )
}

export default App
