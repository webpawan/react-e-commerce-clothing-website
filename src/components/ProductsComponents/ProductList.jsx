import React from 'react'
import { useFileContext } from '../Context/FilterContext';
import img from "./sam1.jpg";

const ProductList = () => {
  const {filter_products} = useFileContext();
  
  return (
    <>
     <div className="col-11 col-md-8 mx-auto">
            <div className="row">
              <div className="col-11 col-md-6 col-lg-4 mb-3 mx-auto">
                <div className="card">
                  <img
                    src={img}
                    className="card-img-top mx-auto"
                    alt="hello"
                    style={{ width: "10rem" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
    </>
  )
}

export default ProductList