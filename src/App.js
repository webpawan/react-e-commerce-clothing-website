import React from "react";
import Home from "./components/Home";
import Products from "./components/Products";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import SingleProducts from "./components/SingleProducts";
import AddtoCard from "./components/AddtoCard";

function App() {
  return (
    <>
      <Router>
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleproduct/:id" element={<SingleProducts />} />
          <Route path="/cart" element={<AddtoCard />} />
          <Route path="*" element={<Error />} />
          
        </Routes>
        
      </Router>
    </>
  );
}
export default App;
