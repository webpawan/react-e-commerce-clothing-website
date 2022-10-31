import React from "react";
import per1 from '../Img/Team/img1.jpg'
import per2 from '../Img/Team/img2.jpg'
import per3 from '../Img/Team/img3.jpg'
import per4 from '../Img/Team/img4.jpg'
import Footer from './Footer'
const AboutUs = () => {
  return (
    <>
      <div className="container my-5 mx-auto">
        <div className="row mx-atuo text-center">
<div className="col-11 mx-auto">
<h1 className="text-capitalize heading underline d-inline px-2">about us</h1>
</div>
        </div>
        <div className="row mx-auto">
          <div className="storeImg mt-5 mx-auto"></div>
        </div>
        <div className="row my-4 mx-auto ">
          <div className="col-10 col-md-6 col-lg-4 my-3 mx-auto">
            <p className="heading-1 ">Who We Are ?</p>
            <h6 className="">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
              debitis optio officiis non cumque architecto sequi quod
              repudiandae, dolor veritatis.
            </h6>
          </div>
          <div className="col-10 col-md-6 col-lg-4 my-3 mx-auto">
            <p className="heading-1 ">Who We Do ?</p>
            <h6 className="">
              Lorem ipsum, dolor sit amet consectetur adpisicing elit. Rerum
              debitis optio officiis non cumque architecto sequi quod
              repudiandae, dolor veritatis.
            </h6>
          </div>
          <div className="col-10 col-md-6 col-lg-4 my-3 mx-auto">
            <p className="heading-1 ">Why Choose Us ?</p>
            <h6 className="">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
              debitis optio officiis non cumque architecto sequi quod
              repudiandae, dolor veritatis.
            </h6>
          </div>
        </div>
       
        <div className="row my-5">
        <hr />
          <div className="col-10 col-md-4 col-lg-3 my-2">
            <div className="d-flex align-items-center justify-content-center">
              <p className="mx-2 display-5">102</p>
              <h4>Our Clients</h4>
            </div>
            
          </div>
          <div className="col-10 col-md-4 col-lg-3 my-2">
            <div className="d-flex align-items-center justify-content-center">
              <p className="mx-2 display-5">102</p>
              <h4>Total
Categories</h4>
            </div>
            
          </div><div className="col-10 col-md-4 col-lg-3 my-2">
            <div className="d-flex align-items-center justify-content-center">
              <p className="mx-2 display-5">50</p>
              <h4>
In
Country</h4>
            </div>
            
          </div><div className="col-10 col-md-4 col-lg-3 my-2">
            <div className="d-flex align-items-center justify-content-center">
              <p className="mx-2 display-5">96%</p>
              <h4>Happy
Customer</h4>
            </div>
            
          </div>
        <hr/>

        </div>

        <div className="row mx-auto my-2">
            <div className="row mx-auto">
                <div className="col-11 mx-auto text-center">
                    <h3 className="heading-1 underline-1 d-inline px-2">Meet Our Team</h3>
                </div>
                <div className="row mx-auto mt-5">
                <div className="col-10 col-md-4 col-lg-3 mx-auto">
    <img src={per4} alt="" className="img-fluid"/>
    <h4 className="text-capitalize">Vanessa Soto
</h4>
    <p className=" text-uppercase"> founder and c.e.o.</p>
</div>
<div className="col-10 col-md-4 col-lg-3 mx-auto">
    <img src={per1} alt="" className="img-fluid"/>
    <h4 className="text-capitalize">andreea-avramescu</h4>
    <p className=" text-uppercase" >Fashion Design </p>
</div>
<div className="col-10 col-md-4 col-lg-3 mx-auto">
    <img src={per2} alt="" className="img-fluid"/>
    <h4 className="text-capitalize">Christine Wise</h4>
    <p className=" text-uppercase">Manager</p>
</div><div className="col-10 col-md-4 col-lg-3 mx-auto">
    <img src={per3} alt="" className="img-fluid"/>
    <h4 className="text-capitalize">John Smith</h4>
    <p className=" text-uppercase">cto</p>
</div>
                </div>
            </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default AboutUs;
