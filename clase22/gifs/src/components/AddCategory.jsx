import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';
import useDebounce from '../hooks/useDebounce';

const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');
    const [autocomplete, setAutocomplete] = useState([]);

    const debounceValue = useDebounce(inputValue, 1000);

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const getAutocomplete = async() => {
      let options = await getGifs("autocomplete", debounceValue)
      setAutocomplete(options)
      console.log("autocomplete", autocomplete)
    }

    useEffect(()=> {
      getAutocomplete()
    },[debounceValue])

    const handleClick = (category) =>{
      onNewCategory(category.trim())
      setAutocomplete([])
      setInputValue("")
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;

        setInputValue("")
        onNewCategory(inputValue.trim())
    }

  return (
    <div className='categories-container'>
      <form onSubmit={onSubmit}>
          <input type="text"
          placeholder='Buscar gifs'
          value={inputValue}
          onChange={onInputChange}
          />
      </form>
      {
        autocomplete.length > 0 && (
          <ul className='autocomplete'>
            {
              autocomplete.map((item) => (
                <li onClick={() => handleClick(item.name)} key={item.name}>{item.name}</li>
              ))
            }
          </ul>
        )
      }
    </div>
  )
}

export default AddCategory