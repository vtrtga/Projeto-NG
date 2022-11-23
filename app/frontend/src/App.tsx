import React, { ReactElement } from 'react';
import './styles/reset.css'
import './styles/login.css'

import Login from './pages/Login';
import { Routes, Route, Navigate } from 'react-router-dom';
import UserPanel from './pages/UserPanel';
function App(): ReactElement {
  return (
    <Routes>
      <Route path="/home" element={ <UserPanel /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/" element={ <Navigate to="/login"/> }/>
    </Routes>
  );
}

export default App;