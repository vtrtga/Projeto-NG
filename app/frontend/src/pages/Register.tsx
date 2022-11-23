import React, { ReactElement, useState } from "react";
import { createUserRequest } from "../services/request";
import { Link } from "react-router-dom";
import '../styles/register.css'

function Register(): ReactElement {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [withSuccess, setWithSuccess] = useState(false);
  const [validData, setIsValidData] = useState(true);


  const newUser = async (e: any) => {
    
    e.preventDefault();

    try {
      await createUserRequest('/user/register', { username, password })
    } catch(e) {
      setIsValidData(false);
      setWithSuccess(false);
    }
  }
  return(
  <div>
  <form action="" className="register-container">
    <h1>
    Create new account
    </h1>
    <label>
      Username
    <input 
    type="text" 
    value={ username }
    onChange={({ target: { value } }) => { setUsername(value) }}
    className="username-input" />
    </label>

    <label>
      Password
    <input 
    type="password" 
    value={ password }
    onChange={({ target: { value } }) => { setPassword(value) }}
    className="password-input" />
    </label>

    <button className="submit-register">Create</button>
    <Link to="/">
    <button className="btn-back-to-login">Back</button>
    </Link>
  </form>
  </div>
  );
}

export default Register;