import React from "react"
import Home from "./components/Home"
import "./App.css"

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from "./components/Login"
import Signup from "./components/Signup"
export default function App(){

  return (
    <Router>
       <Routes>
         <Route path ="/" element={<Login />}/>
         <Route path ="/signup" element={<Signup />}/>
         <Route path ="/home" element={<Home />}/>
       </Routes>
    </Router>
  )
}