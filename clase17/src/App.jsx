import List from "./components/List";
import Mensaje from "./components/Mensaje";

// PascalCase
function App(){

  // return <div><Mensaje/></div>
  return <div><List/></div>
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