import React from 'react'
import { useEffect } from 'react';
import { createContext } from 'react'

export const ChatContext = createContext();
  

export const ChatContextProvider = ({children, user}) => {

    useEffect(() =>{
        const getUserChats = async () => {

        }
        getUserChats();
    },[])
  return (
    <ChatContext.Provider>
        {children}
    </ChatContext.Provider>
  )
}