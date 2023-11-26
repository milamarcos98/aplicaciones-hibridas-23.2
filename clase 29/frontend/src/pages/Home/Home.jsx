import React, { useState, useEffect, useContext } from 'react'
import "./Home.css"
import axios from "axios"
import ClipLoader from "react-spinners/ClipLoader"
import Card from '../../components/card/Card';
import Filter from '../../components/filter/Filter';
import { AuthContext } from '../../context/AuthContext';

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState("");

  const {auth} = useContext(AuthContext)
  console.log(auth)
  useEffect(() => {
    axios
    .get('http://localhost:3000/movies?limit=20',{
      headers: {'token': auth}
    })
    .then((response) => {
      // console.log(response)
      setMovies(response.data);
      setTimeout(() => {
        setLoading(false)
      }, 3000)
    })
    .catch((error)=>{
      console.log(error)
      setLoading(false)
    })
  }, [])

  const filterMovies = movies.filter((movie) => {
    return selectedGenre === '' || movie.genres.includes(selectedGenre);
  });
  console.log(filterMovies)
  
  return (
    <>
    <Filter selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre}/>
    <div className='cards_container'>
      {
        loading ?
        <ClipLoader
        color='#fff'
        loading={loading}
        size={64}
        />
        :
        filterMovies?.map((movie)=> (
          <Card showContent={false} movie={movie} key={movie._id}/>
          ))
        }
    </div>
        </>
  )
}

export { Home };