import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg shadow  navbar-light bg-light fixed-top">
        <div className="container-fluid">
        
          <NavLink to='/' className='navbar-brand'>
          <img src='img/logo.jpg' className="logo" alt="logo" /> Fashion Factory
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
            <ul className="navbar-nav mx-auto p-2">
              <li className="nav-item">
                {/* <a className="nav-link active" href="/">
                  Home
                </a> */}
                <NavLink className='nav-link active' to='/'>Home</NavLink>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link " href="/">
                  Shope
                </a> */}
                <NavLink className='nav-link active' to='/shop'>shop</NavLink>

              </li>
              <li className="nav-item">
                {/* <a className="nav-link " href="/">
                  About
                </a> */}
                <NavLink className='nav-link active' to='/about'>about</NavLink>

              </li>
              <li className="nav-item">
                {/* <a className="nav-link " href="/">
                  Contact
                </a> */}
                <NavLink className='nav-link active' to='/contact'>contact</NavLink>

              </li>
            </ul>

            <div className="d-flex  ">user</div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
