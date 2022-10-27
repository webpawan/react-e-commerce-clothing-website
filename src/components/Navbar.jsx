import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Navbar
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

            <div className="d-flex ">
              <span className="mx-2">
                <i class="fa-brands fa-twitter"></i>
              </span>
              <span className="mx-2">
              <i class="fa-brands fa-linkedin"></i>
              </span>
              <span className="mx-2">
              <i class="fa-brands fa-square-instagram"></i>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
