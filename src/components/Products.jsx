import React from "react";
import FilterSection from "./ProductsComponents/FilterSection";
import ProductList from "./ProductsComponents/ProductList";
import { useFileContext } from "../components/Context/FilterContext";
import SortingCom from "./Filters/SortingCom";
import Footer from "./Footer";
import Navbar from "./Navbar";

import Heading from "./utility/Heading";


const Shop = () => {
  const {filter_products,sorting,} = useFileContext();

  return (
    <>
      <div className="container my-5">
        <Navbar  />
      </div>
      <div className="container-fluid  ">
        <div className="row ">
          <div  className="col-11  mx-auto text-center mt-5">
        
      <Heading name="shope"/>

          </div>
        </div>

        <div className="row p-5 ">
          <SortingCom SortingFun={sorting}/>
          <FilterSection />
         <ProductList filter_products={filter_products}/>
      
        </div>
        
      </div>
     <Footer/>
    </>
  );
};

export default Shop;
