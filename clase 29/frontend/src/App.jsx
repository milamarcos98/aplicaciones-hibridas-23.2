import './App.scss'
import {Routes, Route} from "react-router-dom"
import { Home, Detail, CreateMovie, Register, Login, Chat } from './pages'
import Navbar from './components/navbar/Navbar'
import ProtectedRoutes from './Routes/ProtectedRoutes'
import ChatContextProvider from './context/ChatContext'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'

function App() {
const {user} = useContext(AuthContext)
  return (
    <>
    <ChatContextProvider user={user}>
    <Navbar/>
    <Routes>
      <Route element={<ProtectedRoutes/>}>
        <Route path="/details/:id" element={<Detail/>} />
        <Route path="/create" element={<CreateMovie/>} />
        <Route path="/chat" element={<Chat/>} />
      </Route>
        <Route path="/" element={<Home/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
    </ChatContextProvider>
    </>
  )
}

export default App
