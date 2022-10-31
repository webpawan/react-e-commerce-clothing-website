import React from "react";
import logo from "../Img/logo.jpg";
// import ShopeUi from "./ShopeUi";
// import { BrowserRouter } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg shadow  navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} className="logo" alt="logo" /> Fashion Factory
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav mx-auto p-2">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/">
                  Shope
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/">
                  Contact
                </a>
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
