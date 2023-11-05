import React, { useState } from 'react'

const Forms = () => {
    const [search, setSearch] = useState("");
    if(search === "hola") setSearch("magic");
  return (
    <form onSubmit={(e)=>{
        e.preventDefault()
        console.log(e.target)
        console.log(e.target.search.value)
    } }>
        <input value={search} type="text" name='search' autoComplete='off' onChange={e => setSearch(e.target.value)}/>
        <div>
            {search}
        </div>
        <button type='submit'>Buscar</button>
    </form>
  )
}

export default Forms