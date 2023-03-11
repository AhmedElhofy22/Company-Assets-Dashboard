import React from 'react'
import Logo from '../Images/shopify-ar21.svg'
import './SignUp.css'
import { Link } from "react-router-dom";
import useValidForms from '../Hooks/useValidForms.js';

const SignUp = () => {
  const {value:enteredName, hasError:nameInputHasError, valueChangeHandler:nameChangeHandler, valueBlurHandler:nameBlurHandler, isValid:enteredNameIsValid} = useValidForms(value => value.trim() !== '')
  const {value:enteredEmail, hasError:emailInputHasError, valueChangeHandler:emailChangeHandler, valueBlurHandler:emailBlurHandler, isValid:enteredEmailIsValid} = useValidForms(value=>value.includes('@'))
  const {value:enteredPassword, hasError:passwordInputHasError, valueChangeHandler:passwordChangeHandler, valueBlurHandler:passwordBlurHandler, isValid:enteredPasswordIsValid} = useValidForms(value => value.trim() !== '')
  const {value:enteredResetPassword, hasError:resetPasswordInputHasError, valueChangeHandler:resetPasswordChangeHandler, valueBlurHandler:resetPasswordBlurHandler, isValid:enteredResetPasswordIsValid} = useValidForms(value => value.trim() !== '')
  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid && enteredPasswordIsValid && enteredResetPasswordIsValid) {
    formIsValid = true;
  }
  
  return (
    <div className="signUp">
    <img src={Logo} alt='logo-img' className="signUp-logo"/>
   <div className="signUp-container">
    <h1>Create Account</h1>
    <form >
      <h5>Your Name</h5>
      <input placeholder="First & Last Name" type="text" value={enteredName} onChange={nameChangeHandler} onBlur={nameBlurHandler}/>
      {nameInputHasError && (
        <p className='error-text'>Please enter a valid name.</p>
      )}
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
      <h5>Re-Enter Password</h5>
      <input  type="password" value={enteredResetPassword} onChange={resetPasswordChangeHandler} onBlur={resetPasswordBlurHandler}/>
      {resetPasswordInputHasError && (
        <p className='error-text'>Enter Password Confirmation</p>
      )}
      <button type="submit" className="signUp-signUpBtn" disabled={!formIsValid}>Sign Up</button>
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
