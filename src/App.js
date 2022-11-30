import React from "react";
import Home from "./components/Home";
import Products from "./components/Products";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import SingleProducts from "./components/SingleProducts";
// import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
import AddtoCard from "./components/AddtoCard";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleproduct/:id" element={<SingleProducts />} />
          <Route path="/cart" element={<AddtoCard />} />
          <Route path="*" element={<Error />} />
          
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}
export default App;
