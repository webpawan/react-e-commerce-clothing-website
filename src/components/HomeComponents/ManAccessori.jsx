import React from "react";
import { useProduct } from "../Context/ProductContext";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Heading from '../utility/Heading'
const ManAccessori = () => {
  const { isLoading, accessory } = useProduct();

  if (isLoading) {
    return <div> ...Loading  lorem1000</div>;
  }

  return (
    <>



      <div className="container-fluid  DealOftheWeak perallexImg mx-auto text-center p-4 mb-4">
        <div className="row">
          {accessory.map((curElem,index)=>{
const {name,id} = curElem;
return <div className="col" key={index}>
<Heading name={name} textCol="text-light"/>

<h6 className="text-white my-5 w-50  mx-auto">
  <motion.span drag  dragConstraints={{
     top: -30,
     left: -50,
     right: 0,
     bottom: 50,
   }}
    className="d-block special text-capitalize mb-3"
    style={{ fontSize: "3.5rem" }}
  >
    why ? accessory need{" "}
  </motion.span>
  <span className="my-4">
    Image result for why man accessory need Accessories do magic in
    making, the otherwise dull and simple, outfit more stylish and
    elegant. The more classy accessories you add to your attire, the
    more respectable you look
  </span>
</h6>

<NavLink to={`singleproduct/${id}`}>
<motion.button whileHover={{y:-10,transition:{duration:.5}}} whileTap={{opacity:0,scale:.4}} className="btn btn-outline-warning text-capitalize">buy now</motion.button>
</NavLink>
</div>
          })}
        </div>
      </div>
    </>
  );
};

export default ManAccessori;
