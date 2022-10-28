import React from "react";
import img1 from "../Img/sample/img1.jpg";
import img2 from "../Img/sample/img2.jpg";
import img3 from "../Img/sample/img3.jpg";
import img4 from "../Img/sample/img4.jpg";
const HeaderLast = () => {
  return (
    <>
      <div className="container-fluid HeaderLast mb-5">
        <div className="row  text-center">
          <div className=" my-4 mx-auto col-12 col-sm-6 col-lg-3   img-container">
            <img src={img1} alt="img" />
          </div>
          <div className=" my-4 mx-auto col-12 col-sm-6 col-lg-3   img-container">
            <img src={img2} alt="img" />
          </div>
          <div className=" my-4 mx-auto col-12 col-sm-6 col-lg-3   img-container">
            <img src={img3} alt="img" />
          </div>
          <div className=" my-4 mx-auto col-12 col-sm-6 col-lg-3   img-container">
            <img src={img4} alt="img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderLast;
