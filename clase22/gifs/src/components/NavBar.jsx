import React from 'react'
import {NavLink} from "react-router-dom";

function NavBar() {
  return (
   <header>
    <nav>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/random">Random</NavLink></li>
        </ul>
    </nav>
   </header>
  )
}

export default NavBar