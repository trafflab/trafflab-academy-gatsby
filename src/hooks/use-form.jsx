import React from "react";

export default function useForm() {
  const [values, setValues] = React.useState({})
  const [isValid, setIsValid] = React.useState(false)
  
  const handleChange = (evt) => {
    if (typeof evt === 'string') {
      if (evt === '89') {
        setValues({...values, phone: '79'})
        return
      } 
      setValues({...values, phone: evt})
      return
    } 
    const target = evt.target
    const name = target.name;
    setValues({...values, [name]: target.value})
    setIsValid(target.closest('form').checkValidity());
  }

  const handleReset = React.useCallback(
    (newValues = {}, newIsValid = false) => {
      setValues(newValues);
      setIsValid(newIsValid);
  })

  return {values, handleChange, isValid, handleReset}
}