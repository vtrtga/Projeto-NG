import React, { ReactElement, useState } from "react";
import { createUserRequest } from "../services/request";
import '../styles/register.css'
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";

function Register(): ReactElement {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registered, setRegistered] = useState(false);
  const [validData, setIsValidData] = useState(true);
  const [userExist, setUserExist] = useState(false);
  const navigate = useNavigate();


  const createRequest = async (e: any) => {
    e.preventDefault();
    
    try {
     await createUserRequest('/users/register', { username, password });
      setIsValidData(true);
      setUserExist(false);
      setRegistered(true);
    } catch(error) {
      const err = error as AxiosError;
      if(err.response?.status === 409) {
        setIsValidData(true);
        setRegistered(false)
        setUserExist(true);
      }
      setIsValidData(false);
      setRegistered(false);
    }
  }

  const backToLogin = () => {
    return navigate('/');
  }

  return(
  <div className="register-div">
    {
      registered ? (
    <h2> User created with success! </h2> 
    ) && ( 
      <button onClick={backToLogin} className="btn-back-register">Back</button>
    )
      : (<form action="" className="register-container">
    <h1>
    Create new account
    </h1>
    <label className="label-username">
      Username
    <input 
    type="text" 
    value={ username }
    onChange={({ target: { value } }) => { setUsername(value) }}
    className="username-input" />
    </label>

    <label className="label-password">
      Password
    <input 
    type="password" 
    value={ password }
    onChange={({ target: { value } }) => { setPassword(value) }}
    className="password-input" />
    {
      validData ? null : <p className="register-err">username must be at least 3 characters and password at least 1 uppercase letter and 3 numbers</p>
    }
    {
      userExist ? <p>User already exists</p> : null
    }
    </label>

    <div className="btn-register">

    <button onClick={createRequest} className="btn-submit-register">Create</button>

    <button onClick={backToLogin} className="btn-back-register">Back</button>

    </div>
  </form>)
   }
  </div>
  );
}

export default Register;