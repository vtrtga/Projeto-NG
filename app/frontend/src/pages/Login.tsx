import React, { ReactElement, useContext, useEffect, useState } from 'react'
import { requestLogin, setToken } from '../services/request'
import { Navigate, useNavigate } from 'react-router-dom';
import { getUserInfos } from '../services/request';
import Context from '../context/Context';


function Login (): ReactElement {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);
  const { user , setUser, setBalance } = useContext(Context);

  const navigate = useNavigate();

  const login = async (e: any) => {
    e.preventDefault()
    try {
      const { token } = await requestLogin('/login', { username, password });
      const loggedUser = await getUserInfos(`users/${ username }`);
      setUser(loggedUser);

      const loggedUserBalance = await getUserInfos(`users/balance/${ user.accountId }`);
      setBalance(loggedUserBalance.balance);
      setToken(token);
      setIsLoggedIn(true);

      localStorage.setItem('token', token);
      localStorage.setItem('userInfos', JSON.stringify(loggedUser));
      localStorage.setItem('userBalance', loggedUserBalance.balance);
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
