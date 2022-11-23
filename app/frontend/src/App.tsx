import React, { ReactElement } from 'react'
import Register from './pages/Register'
import './styles/reset.css'
import './styles/login.css'
import { Routes, Route, Navigate, Router, BrowserRouter } from 'react-router-dom'

import Login from './pages/Login'
import UserPanel from './pages/UserPanel'
function App(): ReactElement {
  return (
    <Routes>
      <Route path="/home" element={ <UserPanel /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/"  element={ <Navigate to="/login"/> }/>
    </Routes>
    
  );
}

export default App;