import React from "react";
import Heading from "../utility/Heading";
import { useProduct } from "../Context/ProductContext";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";


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
        <div className="container mx-auto text-center py-2 hide_overflow">
          <div className="row ">

           {mostSelling.map((curElem,index)=>{

const {id,price,img} = curElem;
return  <motion.div initial={{opacity:0,x:100}} whileInView={{opacity:1,x:0,transition:{duration:index+1}}} className="col-lg-3 col-md-4 col-10 mx-auto my-2 " key={index}>
<img src={img} alt="my image87" className="img-fluid" />
<div className=" my-2 d-flex justify-content-between align-items-center w-75 mx-auto bg-dark px-3">
  <NavLink to={`/singleproduct/${id}`}>
  <button className="btn btn-outline-light my-2">click </button>
  </NavLink>
  <p className="my-2 lead text-light">&#x20B9;{price}</p>
</div>
</motion.div>

           })}
          </div>
        </div>
        <NavLink to='/products'>
        <motion.button initial={{opacity:0,y:20}} whileInView={{opacity:1,y:-20,transition:{delay:.6, type: "spring", stiffness: 100}}}  className="btn btn-outline-dark mt-5 text-capitalize">
          more products
        </motion.button>
        </NavLink>
      </div>
    </>
  );
};

export default MostSelling;
