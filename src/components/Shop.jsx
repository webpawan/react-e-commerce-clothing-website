import React from "react";

import img from "../Img/sam2.jpg";
import Footer from "./Footer";
import Navbar from "./HomeComponents/Navbar";
const Shop = () => {
  return (
    <>
    <div className="container my-5">
    <Navbar/>
    </div>
      <div className="container-fluid  ">
   

        <div className="row ">
          <div className="col-11  mx-auto text-center mt-5">
            <h1 className="mx-auto px-3 heading underline d-inline">shope</h1>
          </div>
        </div>
        <div className="row p-5">
          <div className="col-11 col-md-4 text-light mx-auto">
            <form action="">
              <div className="input-group mb-3 ">
                <div className="input-group-prepend">
                  <button
                    className="input-group-text btn btn-outline-dark"
                    id="basic-addon1"
                  >
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </form>
          </div>
          <div className="col-11 col-md-8 mx-auto">
            <div className="row">
              <div className="col-11 col-md-6 col-lg-4 mb-3 mx-auto">
                <div className="card">
                  <img
                    src={img}
                    className="card-img-top mx-auto"
                    alt="hello"
                    style={{ width: "10rem" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>{" "}
              <div className="col-11 col-md-6 col-lg-4 mb-3 mx-auto">
                <div className="card">
                  <img
                    src={img}
                    className="card-img-top mx-auto"
                    alt="hello"
                    style={{ width: "10rem" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>{" "}
              <div className="col-11 col-md-6 col-lg-4 mb-3 mx-auto">
                <div className="card">
                  <img
                    src={img}
                    className="card-img-top mx-auto"
                    alt="hello"
                    style={{ width: "10rem" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>{" "}
              <div className="col-11 col-md-6 col-lg-4 mb-3 mx-auto">
                <div className="card">
                  <img
                    src={img}
                    className="card-img-top mx-auto"
                    alt="hello"
                    style={{ width: "10rem" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>{" "}
              <div className="col-11 col-md-6 col-lg-4 mb-3 mx-auto">
                <div className="card">
                  <img
                    src={img}
                    className="card-img-top mx-auto"
                    alt="hello"
                    style={{ width: "10rem" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>{" "}
              <div className="col-11 col-md-6 col-lg-4 mb-3 mx-auto">
                <div className="card">
                  <img
                    src={img}
                    className="card-img-top mx-auto"
                    alt="hello"
                    style={{ width: "10rem" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <button className="btn btn-outline-dark mx-2">
                <i className="fa-solid fa-angle-left "></i>
              </button>
            </li>
            <li className="page-item">
              <a className="page-link" href="/">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/">
                3
              </a>
            </li>
            <li className="page-item">
              <button className="btn btn-outline-dark mx-2">
                <i className="fa-solid fa-angle-right "></i>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
