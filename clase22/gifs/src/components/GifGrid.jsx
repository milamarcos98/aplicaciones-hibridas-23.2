import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import {SyncLoader} from "react-spinners"
import GifItem from './GifItem'

function GifGrid({category}) {
    const {images, isLoading } = useFetchGifs("search", category)
  return (
    <div>
        <h1>{category}</h1>
    {
      isLoading && (<SyncLoader color='#fff'/>)
      // isLoading && (<h2>laoding...</h2>)
    }
    <div className='grid'>
      {
        images.map((image) => (
        <GifItem 
        key={image.id}
        id={image.id}
        title={image.title}
        url={image.images.original.url}

         />
        ))
      }
    </div>
    </div>
  )
}

export default GifGrid