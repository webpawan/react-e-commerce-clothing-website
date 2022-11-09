import React from "react";
import { useProduct } from "../Context/ProductContext";
// import { useInView } from "framer-motion"
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";



const HeaderLast = () => {
  const { isLoading, featureProducts } = useProduct();

  if (isLoading) {
    return <div> ...Loading</div>;
  }

  return (
    <>
      <div className="container-fluid HeaderLast mb-5">
        <div className="row  text-center">
         {featureProducts.map((curElem)=>{
          const {id,name,price,img} = curElem;
        
return  <motion.div className=" my-4 mx-auto col-12 col-sm-6 col-lg-3  " key={id} >
<div className="img_container__header text-center" 
   >
<button className="navLink__header text-center btn btn-dark ">
<NavLink to={`/singleproduct/${id}`} style={{textDecoration:'none',color:'white'}} >click products</NavLink>
</button>
  <img src={img} alt="img" />
 <div className="details_header__products  w-50 ">
 <p className="text-center">{name}</p>
  <p>{price}</p>
 </div>
</div>
</motion.div>
         })}
        </div>
      </div>
    </>
  );
};

export default HeaderLast;
