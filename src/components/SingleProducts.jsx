import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "./Context/ProductContext";
import img from "../img/bg2.jpg";

// const api =

const SingleProducts = () => {
  const { getSingleProducts, isSingleLoading, singleProducts } = useProduct();
  const { id } = useParams();

  useEffect(() => {
    getSingleProducts();
  }, []);

  return (
    <>
      <div className="container-fluid py-5">
        <div className="row">
          <div className="col-10 col-md-7 mx-auto my-2">
            <div className="row mx-auto">
              <div className="SingleProduct__img ">
                <div className="col-12 mx-auto mb-2 ">
                  <div className="SingleProduct__imgContainer">
                    <img src={img} className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-3 mx-auto ">
                <img src={img} alt="" className="img-fluid" />
              </div>
              <div className="col-3 mx-auto ">
                <img src={img} alt="" className="img-fluid" />
              </div>
              <div className="col-3 mx-auto ">
                <img src={img} alt="" className="img-fluid" />
              </div>
              <div className="col-3 mx-auto ">
                <img src={img} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-10 col-md-5 text-center mx-auto bg-light my-2">
          <h1 className="text-capitalize heading underline d-inline px-2 ">
              Product name
            </h1>
            <p className="text-center mx-auto  pera p-4 mb-0">out product summt Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, numquam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, doloribus.</p>
          
          <p className="">
              <span><i class="fa-regular fa-star mx-2"></i></span>
              <span><i class="fa-regular fa-star mx-2"></i></span>
              <span><i class="fa-regular fa-star mx-2"></i></span>
              <span><i class="fa-regular fa-star mx-2"></i></span>
              <span><i class="fa-regular fa-star mx-2"></i></span>
            </p>
          <h4 className="mb-4">500$</h4>
          <p className="colors">
            <span className="red p-2 text-light rounded-circle mx-2">red</span>
            <span className="red p-2 text-light rounded-circle mx-2">red</span>
            <span className="red p-2 text-light rounded-circle mx-2">red</span>
            <span className="red p-2 text-light rounded-circle mx-2">red</span>
          </p>

<div className="counter d-flex justify-content-center my-4">
<button className="btn btn-outline-dark">+</button>
<h4 className="my-1 mx-3">0</h4>
<button className="btn btn-outline-dark">-</button>
</div>

<buuton className="btn btn-outline-dark text-capitalize">add to cart</buuton>

          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProducts;
