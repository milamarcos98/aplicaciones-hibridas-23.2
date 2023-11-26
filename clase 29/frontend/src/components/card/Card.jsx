import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom'

const Card = ({movie, showContent}) => {
    // console.log(movie)
  return (
    <div className='card'>
                    <img src={movie.thumbnail} alt={movie.title} />
                    <div>
                    <h2>{movie.title}</h2>
                    <p>{movie.year}</p>
                    </div>
                    {
                        showContent ?
<div className='card_content'>
                    <p>{movie.extract}</p>
                    <div>
                        <div>
                            <h3>Cast:</h3>
                            {
                                movie.cast.map((castmember, index) => (
                                    <li key={index}>{castmember}</li>
                                ))
                            }
                        </div>
                        <div>
                            <h3>Genre:</h3>
                            {
                                movie.genres.map((genre, index) => (
                                    <li key={index}>{genre}</li>
                                ))
                            }
                        </div>
                    </div>
                    </div>
                        :
                        <Link to={`/details/${movie._id}`}>Ver mas</Link>
                    }
                </div>
  )
}

export default Card