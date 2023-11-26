import React, { createContext, useEffect, useState} from 'react'
import { jwtDecode } from "jwt-decode"
import Cookies from "js-cookie";

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const auth = Cookies.get('jwToken') || null;

    useEffect(()=> {
      if(auth){
        const decoded = jwtDecode(auth);
        console.log(decoded)
        setUser({
        name: decoded.usuario.name,
        id: decoded.usuario._id
        })
      }
    },[])

    const logOutUser = () => {
      setUser(null)
      Cookies.remove('jwToken')
    }


  return (
    <AuthContext.Provider value={{user, setUser, auth, logOutUser}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider