import './List.css';

function List(){
    const items = ["Demon Slayer", "One Piece", "Jujutsu Kaisen", "Fruits Basket", "Death Note"];
    // const items = [];
    const titulo = "My anime list";


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
                        <li key={index} className='list__item' onClick={(event)=> handleClick(event)}>        
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