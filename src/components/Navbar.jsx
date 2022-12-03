import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "./Context/CartContext";

const Navbar = () => {
  const {total_item} = useCartContext();
  return (
    <>
      <nav className="navbar navbar-expand-lg shadow  navbar-light bg-light fixed-top ">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
            <img src="img/logo.jpg" className="logo" alt="logo" /> Fashion
            Factory
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav mx-auto py-2">
              <li className="nav-item">
                <NavLink className="nav-link " to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>

            <h5 className="d-flex  "><i className="fa-regular fa-circle-user"></i></h5>
          </div>
        </div>
      </nav>

<NavLink to="/cart">
<motion.div className="cart_icon shadow"
  
   initial={{opacity:0}}
   animate={{ y: 100 ,opacity:1}}
   
 transition={{ delay: 3,duration:1 , type: "spring", stiffness: 100}}

 >
<lord-icon

   src="https://cdn.lordicon.com/dnoiydox.json"
   trigger="hover"
   colors="primary:#121331,secondary:#242424"
   style={{width:'30px'}}
   >
     
</lord-icon>
<p>{total_item}</p>
</motion.div>

</NavLink>
    </>
  );
};

export default Navbar;
