import React from "react";
import { useProduct } from "../Context/ProductContext";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";


const HeaderLast = () => {
  const { isLoading, featureProducts } = useProduct();

  if (isLoading) {
    return <div> ...Loading  lorem1000</div>;
  }

  return (
    <>
      <div className="container-fluid HeaderLast mb-5">
      
        <div className="row  text-center">
         {featureProducts.map((curElem,index)=>{
          const {id,name,price,img} = curElem;
        
return  <motion.div initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0,transition:{duration:index+1}}} className=" my-4 mx-auto col-12 col-sm-4" key={index} >
<div className="img_container__header text-center" 
   >
<motion.button  className="navLink__header text-center btn btn-dark ">
<NavLink to={`/singleproduct/${id}`} style={{textDecoration:'none',color:'white'}} >click products</NavLink>
</motion.button>
  <img src={img} alt="img" />
 <div className="details_header__products  w-50 ">
 <p className="text-center">{name.slice(0,25)}</p>
  <p>&#x20B9; {price}</p>
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
