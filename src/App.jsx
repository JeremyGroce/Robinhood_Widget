import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/login'
import Dashboard from './pages/dashboard'




function App() 
{
  return (

    <Router>

      <Routes>
        {/* Login Screen */}
        <Route path="/" element={<Login/>}/>

        {/* Dashboard post-login */}
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>

    </Router>
   
  )
}

export default App
