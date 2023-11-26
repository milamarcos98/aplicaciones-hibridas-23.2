import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

const Chat = () => {
    const {user} = useContext(AuthContext);
    
  return (
    <div>Chat</div>
  )
}

export  {Chat}