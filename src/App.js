import React from "react";
import Home from "./components/Home";
import Products from "./components/Products";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom';
import Error from "./components/Error";


// https://fakestoreapi.com/products/category/men's clothing
// https://fakestoreapi.com/products/category/women's clothing



function App() {

  return (
    <>
    <Router>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/products" element={<Products/>}/>
  <Route path="/about" element={<AboutUs/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path='*' element={<Error/>} />
</Routes>
    </Router>
    </>
  );
}
export default App;
