import { useState, useEffect } from 'react'
import './App.css'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid'; 
import {Route, Routes} from "react-router-dom";
import Home from './components/Home';
import Random from './components/Random';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/random' element={<Random/>} />
      <Route path='*' element={<h1>Not found</h1>} />
    </Routes>
  )
}

export default App
