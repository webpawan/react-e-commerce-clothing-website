import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "./Context/ProductContext";
import Footer from "./Footer";
import Heading from "./utility/Heading";
import Navigation from "./utility/Navigation";
import MyImags from "./SingleProductComponent/MyImags";

const API = "http://localhost:3000/data";
const SingleProducts = () => {
  const { getSingleProducts, isSingleLoading, singleProducts } = useProduct();
  const { id } = useParams();
  const {  name, price, desc, imgs } = singleProducts;

  useEffect(() => {
    getSingleProducts(`${API}/${id}`);
    
  }, []);


  if (isSingleLoading) {
    return <h1 className="loading">...loading</h1>;
  }
  
  return (
    <>
      <div className="container-fluid py-3">
        <div className="row">
          <Navigation name="Product name" page="home" />

          <MyImags imgs={imgs}/>

          
          <div className="col-10 col-md-5 text-center mx-auto bg-light my-2">
            <Heading name={name} />

            <p className="text-center mx-auto  pera p-4 mb-0">{desc}</p>

            <p className="">
              <span>
                <i className="fa-regular fa-star mx-2"></i>
              </span>
              <span>
                <i className="fa-regular fa-star mx-2"></i>
              </span>
              <span>
                <i className="fa-regular fa-star mx-2"></i>
              </span>
              <span>
                <i className="fa-regular fa-star mx-2"></i>
              </span>
              <span>
                <i className="fa-regular fa-star mx-2"></i>
              </span>
            </p>
            <h4 className="mb-4">${price}</h4>
            <p className="colors">
              <span className="red p-2 text-light rounded-circle mx-2">
                red
              </span>
              <span className="red p-2 text-light rounded-circle mx-2">
                red
              </span>
              <span className="red p-2 text-light rounded-circle mx-2">
                red
              </span>
              <span className="red p-2 text-light rounded-circle mx-2">
                red
              </span>
            </p>

            <div className="counter d-flex justify-content-center my-4">
              <button className="btn btn-outline-dark">+</button>
              <h4 className="my-1 mx-3">0</h4>
              <button className="btn btn-outline-dark">-</button>
            </div>

            <button className="btn btn-outline-dark text-capitalize">
              add to cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleProducts;
