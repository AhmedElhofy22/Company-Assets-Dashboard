import React from "react";
import "./Login.css";
import Logo from '../Images/shopify-ar21.svg'
import { useNavigate } from "react-router-dom";
import useValidForms from '../Hooks/useValidForms.js';

const Login = () => {
  const {value:enteredEmail, hasError:emailInputHasError, valueChangeHandler:emailChangeHandler, valueBlurHandler:emailBlurHandler, isValid:enteredEmailIsValid} = useValidForms(value=>value.includes('@'))
  const {value:enteredPassword, hasError:passwordInputHasError, valueChangeHandler:passwordChangeHandler, valueBlurHandler:passwordBlurHandler, isValid:enteredPasswordIsValid} = useValidForms(value => value.trim() !== '')
  let formIsValid = false;
  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }
  
  
  const navigate=useNavigate()
  const goToSignUpPage=()=>{
    navigate('/signup')
  }
  const loginFormHandler=(e)=>{
    e.preventDefault()
    navigate('/home')
  }
  return (
    <div className="login">
      <img src={Logo} alt='logo-img' className="login-logo"/>
     <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={loginFormHandler}>
        <h5>Email</h5>
        <input placeholder="Email" type="email" value={enteredEmail} onChange={emailChangeHandler} onBlur={emailBlurHandler}/>
        {emailInputHasError && (
          <p className='error-text'>Please enter a valid email includes('@').</p>
        )}
        <h5>Password</h5>
        <input placeholder="Password" type="password" value={enteredPassword} onChange={passwordChangeHandler} onBlur={passwordBlurHandler}/>
        {passwordInputHasError && (
          <p className='error-text'>Password must not be empty.</p>
        )}
        <button type="submit" className="login-signInBtn" disabled={!formIsValid}>Sign In</button>
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
