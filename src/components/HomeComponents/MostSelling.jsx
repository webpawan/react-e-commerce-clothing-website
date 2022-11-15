import React from "react";
import Heading from "../utility/Heading";

const MostSelling = () => {
  return (
    <>
      <div className="container-fluid bg-light   p-4 mx-auto text-center">
        <div className="row my-5">
          <div className="col-11 mx-auto">
            <Heading name="most selling products" />
          </div>
        </div>

        {/* my gallery */}
        <div className="container mx-auto text-center py-2">
          <div className="row ">

            <div className="col-lg-3 col-md-4 col-10 mx-auto my-2 ">
              <img src="img/sam1.jpg" alt="my image87" className="img-fluid" />
              <div className=" my-2 d-flex justify-content-between align-items-center w-75 mx-auto bg-dark px-3">
              <button className="btn btn-outline-light my-2">click </button>
              <p className="my-2 lead text-light">18$</p>
              </div>
            </div>
           

          </div>
        </div>
        <button className="btn btn-outline-primary mt-5 text-capitalize">
          click
        </button>
      </div>
    </>
  );
};

export default MostSelling;
