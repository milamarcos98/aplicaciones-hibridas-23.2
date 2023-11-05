// rfce
// rafce
import React from 'react'
import './Button.css'

const Button = ({color, style, onClick, children}) => {
  return (
    <button className={'btn btn-' + color} style={style} onClick={onClick}>
        {children}
    </button>
  )
}

export default Button
