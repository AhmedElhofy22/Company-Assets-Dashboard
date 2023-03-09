import React, { useState } from 'react'
import Logo from '../Images/shopify-ar21.svg'
import './SignUp.css'
import { Link } from "react-router-dom";

const SignUp = () => {
  const [signUpName, setSignUpName] = useState("")
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [resetPassword, setResetPassword] = useState("")
  const signUpNameHandler=(e)=>{
    setSignUpName(e.target.value)
  }
  const signUpEmailHandler=(e)=>{
    setSignUpEmail(e.target.value)
  }
  const signUpPasswordHandler=(e)=>{
    setSignUpPassword(e.target.value)
  }
  const resetPasswordHandler=(e)=>{
    setResetPassword(e.target.value)
  }
  return (
    <div className="signUp">
    <img src={Logo} alt='logo-img' className="signUp-logo"/>
   <div className="signUp-container">
    <h1>Create Account</h1>
    <form >
      <h5>Your Name</h5>
      <input placeholder="First & Last Name" type="text" value={signUpName} onChange={signUpNameHandler}/>
      <h5>Email</h5>
      <input placeholder="Email" type="email" value={signUpEmail} onChange={signUpEmailHandler}/>
      <h5>Password</h5>
      <input placeholder="Password" type="password" value={signUpPassword} onChange={signUpPasswordHandler}/>
      <h5>Re-Enter Password</h5>
      <input  type="password" value={resetPassword} onChange={resetPasswordHandler}/>
      <button type="submit" className="signUp-signUpBtn">Sign Up</button>
      <p>
      By creating an account, you agree to our Conditions of Use
      and Privacy Notice.
      </p>
      <p>Already Have An Account?<Link to="/login">Sign In</Link></p>
    
    </form>
  </div>
 
   </div>
    
  )
}

export default SignUp
