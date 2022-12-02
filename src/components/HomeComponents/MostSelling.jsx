import React from "react";
import Heading from "../utility/Heading";
import { useProduct } from "../Context/ProductContext";
import { NavLink } from "react-router-dom";


const MostSelling = () => {
  const { isLoading, mostSelling } = useProduct();

  if (isLoading) {
    return <div> ...Loading  lorem1000</div>;
  }
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

           {mostSelling.map((curElem,index)=>{

const {id,price,img} = curElem;
return  <div className="col-lg-3 col-md-4 col-10 mx-auto my-2 " key={index}>
<img src={img} alt="my image87" className="img-fluid" />
<div className=" my-2 d-flex justify-content-between align-items-center w-75 mx-auto bg-dark px-3">
  <NavLink to={`/singleproduct/${id}`}>
  <button className="btn btn-outline-light my-2">click </button>
  </NavLink>
  <p className="my-2 lead text-light">{price}</p>
</div>
</div>

           })}
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
