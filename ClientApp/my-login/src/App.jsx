import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import DocumentForm from './components/DocumentForm';

function App() {
  const[isAuthenticated, setIsAuthenticated]=useState(false);
  
  useEffect(()=>{
    const token = localStorage.getItem("accessToken");
    setIsAuthenticated(!!token)
  },[])

  return (
    
    <Router>
      <Routes>

        <Route path="/" element={isAuthenticated? <Navigate to="/home"/> :<Login setIsAuthenticated={setIsAuthenticated}/> }/>
        <Route path="/home" element={isAuthenticated? <Home setIsAuthenticated={setIsAuthenticated}/> :<Navigate to="/"/> }/>
        <Route path="/exam-form" element={isAuthenticated? <DocumentForm setIsAuthenticated={setIsAuthenticated}/> :<Navigate to="/"/> }/>

      </Routes>
    </Router>
 
  )
}

export default App
