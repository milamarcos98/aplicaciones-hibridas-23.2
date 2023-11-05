import { useState, useEffect } from 'react'
import './App.css'
import { getGifs } from './helpers/getGifs';
import { useFetchGifs } from './hooks/useFetchGifs';
import {SyncLoader} from "react-spinners"

function App() {

  // https://developers.giphy.com/

  const category = "messi";

  const {images, isLoading } = useFetchGifs(category)

  return (
    <>
    <h1>{category}</h1>
    {
      isLoading && (<SyncLoader color='#fff'/>)
      // isLoading && (<h2>laoding...</h2>)
    }
    <div>
      {
        images.map((image) => (
          <div key={image.id}>
            <img src={image.url} alt={image.title} />
            <p>{image.title}</p>
            </div>
        ))
      }
    </div>
    </>
  )
}

export default App
