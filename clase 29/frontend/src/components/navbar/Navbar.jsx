import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const Navbar = () => {
  const {user, logOutUser} = useContext(AuthContext);
  return (
    <header>
      {
        user?.name ? <h1>Logged user: {user.name}</h1> : <h3>Logged out</h3>
      }
        <nav>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              {
                user ?
                <>
                  <li><NavLink to="/create">Create movie</NavLink></li>
                  <li><NavLink to="/chat">Chat</NavLink></li>
                  <li><NavLink onClick={()=> logOutUser()} to="/login">LogOut</NavLink></li>
                </>
                :
                <>
                  <li><NavLink to="/register">Register</NavLink></li>
                  <li><NavLink to="/login">Login</NavLink></li>
                </>
              }
                
            </ul>
        </nav>
    </header>
  )
}

export default Navbar