import React, { useState } from 'react'

const FormInput = (props) => {
    const [focus, setFocus] = useState(false);
    const {label, errorMessage, handleOnChange, id, ...otrasProps} = props;

    const handleFocus = (e) => {
        setFocus(true);
    }
  return (
    <div className='formInput'>
        <label>{label}</label>
        <input 
        onChange={handleOnChange}
        onBlur={handleFocus}
        focused={focus.toString()}
        {...otrasProps}
        />
        <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput