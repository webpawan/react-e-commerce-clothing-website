import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "./Context/ProductContext";
import MyImags from "./SingleProductComponent/MyImags";
import Stars from "./SingleProductComponent/Stars";
import Navigation from "./utility/Navigation";
import Heading from "./utility/Heading";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SingleCartData from "./SingleProductComponent/SingleCartData";
import loader from "./images/loderBig.gif" 
const API = "http://localhost:3000/data";
const SingleProducts = () => {
  const { getSingleProducts, isSingleLoading, singleProducts } = useProduct();
  const { id } = useParams();
  const {
    // id: singleProductId,
    name,
    price,
    desc,
    imgs,
    stars,
    stock,
  } = singleProducts;

  useEffect(() => {
    getSingleProducts(`${API}/${id}`);
  }, []);

  if (isSingleLoading) {
    return (
      <div className="loading">
       <img src={loader} alt="" />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container-fluid py-3">
        <div className="row">
          <div className="my-5">
            <Navigation name={name} page="home" />
          </div>
          <MyImags imgs={imgs} />
          <div className="col-10 col-md-5 text-center mx-auto bg-light my-2">
            <Heading name={name} />

            <p className="text-center mx-auto  pera p-4 mb-0">{desc}</p>

            <Stars ProductStars={stars} />

            <h4 className="mb-4">&#x20B9;{price}</h4>

            {stock > 0 && <SingleCartData product={singleProducts} />}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleProducts;
