import Button from "./components/Button";
import List from "./components/List";
import Mensaje from "./components/Mensaje";

// PascalCase
function App(){
  const items = ["Demon Slayer", "One Piece", "Jujutsu Kaisen", "Fruits Basket", "Death Note"];
  const items2 = [1,2,3,4,5];

  // return <div><Mensaje/></div>

  const handleClick = () => {
    console.log("click")
  }

  return (
    <div>
      <Mensaje>
        <p>Lorem ipsum <strong>holi</strong> dolor sit amet consectetur adipisicing elit. Maiores ab error culpa aliquam illo amet molestias sit totam placeat alias eum vero, modi eius, labore cum, quo provident earum magnam.</p>
      </Mensaje>
      <Button onClick={handleClick} color="pink">
        Texto del button
      </Button>
      {/* <Button onClick={handleClick} color="pink" text="texto"/> */}
      <Button onClick={handleClick} color="blue"/>
      <Button onClick={handleClick} style={{backgroundColor: 'blue', color: 'white'}}/>
      <List items={items}/>
      <List items={items2}/>
      </div>
    )
}

export default App;


// // SIN JSX

// React.createElement(
//   MyButton,
//   {
//     color: 'blue',
//   },
//   'Click me'
// )

// // CON JSX

// <MyButton color="blue">Click me</MyButton>