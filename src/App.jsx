import { useEffect, useState } from 'react';
import axios from 'axios';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBarComponent from './components/NavBarComponent/NavBarComponent';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
function App() {


const [products, setProducts] = useState([]);

useEffect(() =>{
  axios
  .get('https://dummyjson.com/products/1')
  .then((res) => {
    setProducts(res.data.products);
  })
  .catch((error) => console.log(error));
}, []);

  return <div>
    <NavBarComponent />
    <ItemListContainer products={products}/>
  </div>;
}

export default App;