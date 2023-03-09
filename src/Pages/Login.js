import React from "react";
import "./Login.css";
import Logo from '../Images/shopify-ar21.svg'

const Login = () => {
  return (
    <div className="login">
      <img src={Logo} alt='logo-img' className="login-logo"/>
     <div className="login-container">
      <h1>Login</h1>
      <form >
        <h5>Email</h5>
        <input placeholder="Email" type="email" value="" />
        <h5>Password</h5>
        <input placeholder="Password" type="password" value="" />
        <button type="submit" className="login-signInBtn">Sign In</button>
        <p>
        By continuing, you agree to our Conditions of Use
        and Privacy Notice.
        </p>
       <button className="login-registerBtn" >
        Create Your Shopify Account
       </button>
      </form>
    </div>
   
     </div>
  );
};

export default Login;
