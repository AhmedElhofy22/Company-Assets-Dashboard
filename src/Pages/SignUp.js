import React from 'react'
import Logo from '../Images/shopify-ar21.svg'
import './SignUp.css'

const SignUp = () => {
  return (
    <div className="signUp">
    <img src={Logo} alt='logo-img' className="signUp-logo"/>
   <div className="signUp-container">
    <h1>Create Account</h1>
    <form >
      <h5>Your Name</h5>
      <input placeholder="First & Last Name" type="text" value="" />
      <h5>Email</h5>
      <input placeholder="Email" type="email" value="" />
      <h5>Password</h5>
      <input placeholder="Password" type="password" value="" />
      <h5>Re-Enter Password</h5>
      <input  type="password" value="" />
      <button type="submit" className="signUp-signUpBtn">Sign Up</button>
      <p>
      By creating an account, you agree to our Conditions of Use
      and Privacy Notice.
      </p>
    
    </form>
  </div>
 
   </div>
    
  )
}

export default SignUp
