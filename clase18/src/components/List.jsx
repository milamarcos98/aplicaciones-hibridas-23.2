import { useState } from 'react';
import './List.css';

function List({items}){
    // const items = [];
    const titulo = "My anime list";

    // let selectedIndex = 2;

    // useState
    // const arr = useState(-1)
    // arr[0] variable
    // arr[1] updater

    const [ selectedIndex, setSelectedIndex ] = useState(-1);


    const handleClick = (event) => console.log(event.target);
    
    return(
        // <>
        // </>
        <div className='list__container'>
            <h1>{titulo}</h1>
            {
                // items.length === 0 ? <p>No hay items.</p> : null
                items.length === 0 && <p>No hay items.</p>
            }
            {
                items.length > 0 && <ul className='list__group'>
                {
                    items.map((item, index) => ( 
                        <li key={index} 
                        className={selectedIndex === index ? "list__item active" : "list__item"} onClick={()=> setSelectedIndex(index)}>        
                            {item}
                        </li>
                    ))
                }
                {/* <li className='list__item'>item 1</li>
                <li className='list__item'>item 2</li>
                <li className='list__item'>item 3</li>
                <li className='list__item active'>item 4</li>
                <li className='list__item'>item 5</li> */}
            </ul>
            }
        </div>
    )
}

export default List;