import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import Card from '../../components/card/Card';
import ClipLoader from "react-spinners/ClipLoader";

const Detail = () => {
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
  
    useEffect(() => {
      setLoading(true);
      axios
        .get(`http://localhost:3000/movies/${id}`)
        .then((response) => {
            console.log(response.data)
          setMovie(response.data);
          setTimeout(() => {
              setLoading(false);
          }, 3000)
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }, []);
  return (
    <div className='cards_container'>
        {
            loading ?
            <ClipLoader
                color="#ffffff"
                loading={loading}
                size={64}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
              : 
             <Card showContent={true} movie={movie} key={movie._id}/>
        }
    </div>
  )
}

export {Detail}