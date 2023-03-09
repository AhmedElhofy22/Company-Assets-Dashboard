import React, { useState } from "react";
import "./Login.css";
import Logo from '../Images/shopify-ar21.svg'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginEmailHandler=(e)=>{
    setEmail(e.target.value)
  }
  const loginPasswordHandler=(e)=>{
    setPassword(e.target.value)
  }
  const navigate=useNavigate()
  const goToSignUpPage=()=>{
    navigate('/signup')
  }
  return (
    <div className="login">
      <img src={Logo} alt='logo-img' className="login-logo"/>
     <div className="login-container">
      <h1>Login</h1>
      <form >
        <h5>Email</h5>
        <input placeholder="Email" type="email" value={email} onChange={loginEmailHandler}/>
        <h5>Password</h5>
        <input placeholder="Password" type="password" value={password} onChange={loginPasswordHandler}/>
        <button type="submit" className="login-signInBtn">Sign In</button>
        <p>
        By continuing, you agree to our Conditions of Use
        and Privacy Notice.
        </p>
       <button type="button"  className="login-registerBtn" onClick={goToSignUpPage} >
        Create Your Shopify Account
       </button>
      </form>
    </div>
   
     </div>
  );
};

export default Login;
