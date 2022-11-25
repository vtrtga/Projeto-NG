import React, { ReactElement } from 'react'
import Register from './pages/Register'
import './styles/reset.css'
import './styles/login.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Provider from './context/Provider'

import Login from './pages/Login'
import UserPanel from './pages/UserPanel'
import Transfers from './pages/Transfer'
function App(): ReactElement {
  return (
    <Provider>
    <Routes>
      <Route path="/home" element={ <UserPanel /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/transfers" element={ <Transfers /> } />
      <Route path="/"  element={ <Navigate to="/login"/> }/>
    </Routes>
    </Provider>
    
  );
}

export default App;