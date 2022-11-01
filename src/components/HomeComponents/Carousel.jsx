import React from "react";

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
                src='img/bg1.jpg'
                className="d-block w-100 text-center imgCarousel"
                alt="im1"
              />
            </div>
            <div className="carousel-item">
              <img src='img/bg2.jpg' className="d-block w-100 imgCarousel " alt="im2" />
            </div>
            <div className="carousel-item">
              <img src='img/bg3.jpg' className="d-block w-100 imgCarousel " alt="im2" />
            </div>
            <div className="carousel-item">
              <img src='img/bg4.jpg' className="d-block w-100 imgCarousel" alt="img3" />
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
