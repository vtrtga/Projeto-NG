import React from "react";

function Login() {
return(
  <div>
    <span className="login-text">Login</span>
    <div>

      <input type="text" className="user-login"/>
      <input type="password" className="password-login" />
    </div>

    <div className="btn-login">
      <button className="btn-login-submit">Login</button>
      <button className="btn-login-register">Cadastrar</button>
    </div>
  </div>
)
}

export default Login;