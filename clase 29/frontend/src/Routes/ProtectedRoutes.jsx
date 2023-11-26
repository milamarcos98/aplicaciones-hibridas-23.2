import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
    const {auth} = useContext(AuthContext)
    const token = {'token': auth}
  return (
    token.token ? <Outlet/> : <Navigate to="/login"/>
  )
}

export default ProtectedRoutes