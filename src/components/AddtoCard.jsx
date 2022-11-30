import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import img from "../img/sam1.jpg";
const AddtoCard = () => {
  return (
    <>
      <div className="container py-5">
        <Navbar />
      </div>
      <div className="container ">
        <div className="row mx-auto py-3 bg-light">
          <div className="col-12 d-md-flex justify-content-between align-items-center mx-auto">
          <div className="col-2 text-center mx-auto">
            <h5 className="heading-1 text-capitalize">item</h5>
          </div>
          <div className="col-2 text-center mx-auto">
          <h5 className="heading-1 text-capitalize">price</h5>
          </div>
            <div className="col-2 text-center mx-auto">
            <h5 className="heading-1 text-capitalize">quantity</h5>
            </div>
            <div className="col-2 text-center mx-auto">
            <h5 className="heading-1 text-capitalize">subTotal</h5>
            </div>
            <div className="col-2 text-center mx-auto">
            <h5 className="heading-1 text-capitalize">remove</h5>
            </div>
          </div>
          <hr />
        <div>
        <div className="my-3 col-12 d-md-flex justify-content-between align-items-center mx-auto ">
          <div className="col-2 d-col-flex align-items-center mx-auto text-center">
              <div className="img_container--cart mx-auto ">
                <img src={img} style={{width:'100px'}} className="img-container" alt="" />
              </div>
              <div className="mx-2  ">
                <h5>name</h5>
                <h6>color <button className="btn btn-dark p-1"></button></h6>
              </div>
            </div>
            <div className="col-2 mx-auto text-center">
              <div>
                <h5>
                  500
                </h5>
              </div>
            </div>
            <div className="col-2 mx-auto text-center">
            <div className="counter d-flex justify-content-center my-4">
        <button className="btn " >
        <i className="fa-solid  fa-plus"></i>
        </button>
        <h4 className="my-1 mx-3">1</h4>
        <button className="btn ">
        <i className="fa-solid fa-minus"></i>
        </button>
      </div>
            </div>
            <div className="col-2 mx-auto text-center">
              <div>
                <h5>500</h5>
              </div>
            </div>
            <div className="col-2 mx-auto text-center">
              <button className="btn btn-outline-danger">
              <i className="fa-solid fa-trash"></i>
              </button>
            </div>
            
          </div>
          <hr className="w-90 mx-atuo my-2"/>
        </div>
          
        
          <div className="col-12 d-sm-flex justify-content-between align-items-center mt-5 mx-auto text-center ">
            <button className="btn btn-outline-primary text-capitalize mx-2 my-2">contine shopping</button>
            <button className="btn btn-outline-danger text-capitalize mx-2">clear cart</button>
          </div>
          
          
        </div>
        <div className="row my-3 ">
        <div className="col d-sm-flex justify-content-end ">
            <div className="cart_box bg-light p-4">
<div className="d-flex justify-content-between align-items-center"><h6 className="lead text-capitalize me-5">subtitle </h6> <h6 className="lead"> 500</h6> </div>
<div className="d-flex justify-content-between align-items-center"><h6 className="lead text-capitalize me-5">shipping fee </h6> <h6 className="lead"> 50</h6> </div>
<hr/>
<div className="d-flex justify-content-between align-items-center"><h6 className="lead text-capitalize me-5">total order </h6> <h6 className="lead"> 550</h6> </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddtoCard;
