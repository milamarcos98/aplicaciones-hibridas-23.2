import React from 'react'
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';
import { useState, useEffect } from 'react'

const Home = () => {
     // https://developers.giphy.com/

  // const category = "messi";
  const [categories, setCategories ] = useState(["One piece"]);

  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);

}
  return (
    <div>
        
    <AddCategory onNewCategory={(value) => onAddCategory(value)}/>
    
    {
      categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))
    }
    </div>
  )
}

export default Home