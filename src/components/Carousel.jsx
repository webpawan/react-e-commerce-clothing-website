import React from "react";
import bg1 from "../Img/bg1.jpg";
import bg2 from "../Img/bg2.jpg";
import bg3 from "../Img/bg3.jpg";
import bg4 from "../Img/bg4.jpg";

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
            <div className="carousel-item active">
              <img
                src={bg1}
                className="d-block w-100 text-center imgCarousel"
                alt="im1"
              />
            </div>
            <div className="carousel-item">
              <img src={bg2} className="d-block w-100 imgCarousel " alt="im2" />
            </div>
            <div className="carousel-item">
              <img src={bg3} className="d-block w-100 imgCarousel " alt="im2" />
            </div>
            <div className="carousel-item">
              <img src={bg4} className="d-block w-100 imgCarousel" alt="img3" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
