import React from 'react'
import AboutUs from '../AboutUs'
import AddtoCard from '../AddtoCard'
import Contact from '../Contact'
import Error from '../Error'
import Home from '../Home'
import ProductList from '../ProductsComponents/ProductList'
import SingleProducts from '../SingleProducts'
import { Routes, Route } from "react-router-dom";
const AnimedRoutes = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleproduct/:id" element={<SingleProducts />} />
          <Route path="/cart" element={<AddtoCard />} />
          <Route path="*" element={<Error />} />
          
        </Routes>
    </>
  )
}

export default AnimedRoutes