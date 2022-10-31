import React from "react";
import logo from "../Img/logo.jpg";
import icons from '../Img/icons.png'
const Footer = () => {
  return (
    <>
      <div className="container-fluid mx-auto bg-dark text-light  p-5">
        <div className="row ">
          <div className="col-10 col-md-4 col-lg-3 text-right mx-auto">
            <img src={logo} alt="logo" className="logo mx-2" /> Fashion Factory

            <p className='my-2'>Address: 60-49 Road 11378 New York</p>
          <p className="my-2">Phone: +65 11.188.888</p>
          <p className="mb-4">Email: hello.colorlib@gmail.com</p>
          <hr className='w-75'/>
          <div className="icons d-flex justify-content-between align-items-right flex-wrap w-75 ">
          
              <span className="">
                <i className="fa-brands footerIcons fa-twitter"></i>
              </span>
              <span className="">
              <i className="fa-brands footerIcons fa-linkedin"></i>
              </span>
              <span className="">
              <i className="fa-brands footerIcons fa-square-instagram"></i>
              </span>
            
          </div>
          </div>
          <div className="col-10 col-md-4 col-lg-3 text-right my-2 mx-auto">
            <h4 className="my-2">Information</h4>
            <p className="my-2">About Us</p>
            <p className="my-2"> Checkout</p>
            <p className="my-2">Contact</p>
            <p className="my-2">Serivius</p>
          </div>
          <div className="col-10 col-md-4 col-lg-3 text-right my-2 mx-auto">
            <h4 className="my-2">My Account</h4>
            <p className="my-2">My Account </p>
            <p className="my-2"> Contact</p>
            <p className="my-2">Shopping Cart</p>
            <p className="my-2">Shop</p>
          </div>
          <div className="col-10 col-md-4 col-lg-3 text-right my-2 mx-auto">
            <h4 className="my-2">Join Our Newsletter Now</h4>
            <p className="my-2">Get E-mail updates about our latest shop and special offers.</p>
            <div className="mb-3 ">
  <label  className="form-label" >Email address </label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
  <button className="btn btn-outline-light my-2">sign in</button>
</div>
          </div>
        </div>

        <div className="row ">
          <hr/>
    <div className="col d-flex justify-content-between align-items-center flex-wrap">
    <p className="d-inline ">Copyright ©2022 All rights reserved Nahi ha By <span className="text-capitalize">( pawan saini ) </span>( 😂 i am unemployed,currently i am looking for job)</p>
          <img src={icons} alt="logo" className="img-fluid " />
    </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
