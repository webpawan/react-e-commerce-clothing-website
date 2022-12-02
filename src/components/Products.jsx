import React from "react";
import FilterSection from "./ProductsComponents/FilterSection";
import ProductList from "./ProductsComponents/ProductList";
import { useFileContext } from "../components/Context/FilterContext";
import SortingCom from "./Filters/SortingCom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useProduct } from "./Context/ProductContext";
import Heading from "./utility/Heading";


const Shop = () => {
  const {filter_products,sorting,} = useFileContext();
const {previousPage,nextPage,page} = useProduct();


  
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
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <button className="btn btn-outline-dark mx-2" onClick={previousPage}>
                <i className="fa-solid fa-angle-left "></i>
              </button>
            </li>
            <li className="page-item">
              <a className="page-link" href="/">
                {page }
              </a>
            </li>
            <li className="page-item">
              <button className="btn btn-outline-dark mx-2" onClick={nextPage}>
                <i className="fa-solid fa-angle-right "></i>
              </button>
            </li>
          </ul>
        </nav>
      </div>
     <Footer/>
    </>
  );
};

export default Shop;
