import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Filter = ({selectedGenre, setSelectedGenre}) => {
    const [filters, setFilters ] = useState([]);

    useEffect(() => {
        axios
        .get('http://localhost:3000/genres')
        .then((response) => {
            // console.log(response.data)
          setFilters(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  return (
    <select
    value={selectedGenre}
    onChange={(e) => setSelectedGenre(e.target.value)}
    >
        <option selected value={""}>All</option>
        {
            filters && filters.map((filter, index) => (
                <option value={filter.genre} key={index}>{filter.genre}</option>
            ))
        }
    </select>
  )
}

export default Filter