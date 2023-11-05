import React from 'react'

const GifItem = ({id, url, title}) => {
  return (
    <div>
            <img src={url} alt={title} />
            <p>{title}</p>
            </div>
  )
}

export default GifItem