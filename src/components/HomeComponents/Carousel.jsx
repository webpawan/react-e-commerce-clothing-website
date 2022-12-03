import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";

const Carousel = () => {
  return (
    <>
      <div className="myCarousel ">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade mx-auto"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active mytext">
              <img
                src="img/bg1.jpg"
                className="d-block w-100 text-center imgCarousel"
                alt="im1"
              />
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1 } }}
                className="display-1 text-center mx-auto text display-1 px-2 style_heading"
              >
                A classic never goes out of style.
              </motion.h1>
            </div>
            <div className="carousel-item">
              <img
                src="img/bg2.jpg"
                className="d-block w-100 imgCarousel "
                alt="im2"
              />
              <motion.p initial={{y:-100,opacity:0}} whileInView={{y:0,opacity:1,transition:{duration:1}}}  className="carousel-caption bg-dark p-2 lead">
                A Large Collection Of clothes & Accessories Online At
                Discounted Prices. Get Offers And Discounts Online. Huge
                Collection. Stylish Collection. Premium Brands. Track An Order.
                Join Our Team. Payment Methods Available
                
              </motion.p>
            </div>
            <div className="carousel-item">
              <img
                src="img/c-3.jpg"
                className="d-block w-100 imgCarousel "
                alt="im2"
              />
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1 } }}
                className="display-1 d-block text-center mx-auto text display-1 px-2 style_heading text-capitalize"
              >
                find products for shop
               <NavLink to="/products">
               <button className="btn btn-dark text-capitalize" style={{fontSize:'20px'}}>shop now</button>
               </NavLink>
              </motion.div>
            </div>
            
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
