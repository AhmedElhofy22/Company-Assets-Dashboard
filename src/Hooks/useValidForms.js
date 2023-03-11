import {useState} from 'react'

const useValidForms = (validateValue) => {
    const[enteredValue,setEnteredValue]=useState('')
    const[isTouched,setIsTouched]=useState(false)
    const valueIsValid = validateValue(enteredValue) 
    const hasError = !valueIsValid && isTouched
    const valueChangeHandler=(e)=>{
        setEnteredValue(e.target.value)
    }
    const valueBlurHandler=()=>{
        setIsTouched(true)
    }
    
  return {
    value:enteredValue, hasError, valueChangeHandler, valueBlurHandler, isValid: valueIsValid
  }
}

export default useValidForms
