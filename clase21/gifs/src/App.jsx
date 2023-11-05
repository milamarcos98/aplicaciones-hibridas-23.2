import { useState, useEffect } from 'react'
import './App.css'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

function App() {

  // https://developers.giphy.com/

  // const category = "messi";
  const [categories, setCategories ] = useState(["One piece"]);

  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  }
  
  return (
    <>

    <AddCategory onNewCategory={(value) => onAddCategory(value)}/>
    
    {
      categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))
    }
    </>
  )
}

export default App
