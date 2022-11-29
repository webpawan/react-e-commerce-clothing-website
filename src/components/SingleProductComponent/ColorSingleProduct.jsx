// import React,{useState} from "react";
import { motion } from "framer-motion"
const ColorSingleProduct = ({products}) => {
 const {colors=[]} = products;
  

  return (
    <>
      <p className="colors">
      
        {colors.map((bgColor,index)=>{
         
return (
  <motion.button whileTap={{scale:1.1}} key={index} className={"btn  text-dark p-2 text-light rounded-circle mx-2 " + (bgColor)} >
  </motion.button>
  
)          

        })}
      </p>
    </>
  );
};

export default ColorSingleProduct;

// `btn  ${bgColor} text-dark p-2 text-light rounded-circle mx-2 singleProductButton`