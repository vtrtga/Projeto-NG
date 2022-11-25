import React, { ReactElement, useEffect, useState } from 'react'
import { requestLogin, setToken } from '../services/request'
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Login (): ReactElement {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);
  const navigate = useNavigate();

  const login = async (e: any) => {
    e.preventDefault()
    try {
      const { token } = await requestLogin('/login', { username, password })

      setToken(token);

      setIsLoggedIn(true);

      localStorage.setItem('token', token);
    } catch (e) {
      setLoginFailed(true);
      setIsLoggedIn(false);
    }
  }

  useEffect(() => {
    setIsLoggedIn(false)
  }, [username, password]);

  if(isLoggedIn) return <Navigate to="/home" />

  return (
  <>
    <section className="login-container">
    <form>
    <span className="login-text">Login</span>

      <input
      type="text"
      value = { username }
      onChange={ ({ target: { value } }) => setUsername(value) }
      className="user-login"/>

      <input
      type="password"
      className="password-login"
      value={ password }
      onChange={ ({ target: { value } }) => setPassword(value) }
      />
      {
        (loginFailed) ? (<p className="p-failed-login">Invalid username or password</p>) : null
      }
      
    <div className="btn-login">

      <button 
      className="btn-login-submit" 
      onClick={ login }>Login</button>


      <button onClick={ () => navigate('/register') } className="btn-login-register" 
      >Cadastrar</button>
  
      
    </div>
    </form>
    </section>
  </>
  )
}

export default Login
