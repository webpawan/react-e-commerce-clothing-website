import { motion } from "framer-motion";
import React  from "react";
import { NavLink } from "react-router-dom";

const ProductList = ({ filter_products }) => {
  
  
 
  return (
    <>
      <div className="col-11 col-md-8 mx-auto">
        <div className="row">
          {filter_products.map((Productsdata) => {
            const { id, name, desc, img, price } = Productsdata;
            return (
              <div className="col-11 col-md-6 col-lg-4 mb-3 mx-auto " key={id}>
                <motion.div className="card"
                whileHover={{y:-10}}
                initial={{opacity:0,y:-50}}
                animate={{opacity:1,y:0,transition:{delay:.4,duration:1}} }>
                  <img
                    src={img}
                    className="card-img-top mx-auto"
                    alt="hello"
                    style={{ width: "10rem" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text d-flex justify-content-between">
                      <span> {desc}</span>
                      <span> {price}</span>
                    </p>
                    <NavLink
                      to={`/singleproduct/${id}`}
                      className="btn btn-outline-dark"
                    >
                      go to product
                    </NavLink>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductList;
