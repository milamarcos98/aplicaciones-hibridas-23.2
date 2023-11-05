import './App.css'
import { Route, Routes, NavLink, Link, useParams, Outlet } from "react-router-dom";

const data = ["onepiece", "demonslayer", "jujutsu"];

const Home = () => <h1>home</h1>;
const Search = () => <h1>search</h1>;
const Data = () => {
  return(
    data.map(item => (
      <li key={item}><Link to={`/item/${item}`}>{item}</Link></li>
    ))
  )
};
const Item = () => {
  // console.log(useParams())
  const {data} = useParams();
  return(
    <div>
      <h2>{data}</h2>
      <Link to={`detail`}>Ver detalles</Link>
      <Outlet/>
    </div>
  )
};

const Detail = () => {
   const {data} = useParams();
   return(
     <div>
       <h2>{data} * detalle</h2>
     </div>
   )
 };


function App() {

  return (
    <>
    <header>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/search">Search</NavLink></li>
          <li><NavLink to="/data">Data</NavLink></li>
          {/* <li><a href="/">Home</a></li>
          <li><a href="/search">Search</a></li> */}
        </ul>
      </nav>
    </header>
  <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/data' element={<Data/>}/>
      <Route path='/item/otro' element={<h1>Otro</h1>}/>
      <Route path='/item/:data' element={<Item/>}>
           <Route path='detail' element={<Detail/>}/>
      </Route>
      <Route path='*' element={<h1>Not found</h1>}/>
  </Routes> 
    </>
  )
}

export default App
