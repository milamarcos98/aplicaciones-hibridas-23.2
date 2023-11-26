import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { ThemeContext } from './context/ThemeContext'

function App() {
  const {theme, setTheme} = useContext(ThemeContext)
  return (
    <div className={`${theme}_bg`}>
      <h1 className='text'>Theme toggle</h1>
      <button className='btn'
      onClick={()=> setTheme(theme === 'light' ? 'dark': 'light')}
      >Switch theme</button>
    </div>
  )
}

export default App
