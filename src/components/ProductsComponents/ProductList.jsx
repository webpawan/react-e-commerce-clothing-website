import React from 'react'
import { NavLink } from 'react-router-dom';

const ProductList = ({filter_products}) => {
  

  return (
    <>
     <div className="col-11 col-md-8 mx-auto">
            <div className="row">
              {filter_products.map((Productsdata)=>{
                const {id,name,desc,img} = Productsdata;
                return (
                  <div className="col-11 col-md-6 col-lg-4 mb-3 mx-auto " key={id}>
                <div className="card">
                  <img
                    src={img}
                    className="card-img-top mx-auto"
                    alt="hello"
                    style={{ width: "10rem" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">
                     {desc}
                    </p>
                    <NavLink to={`/singleproduct/${id}`} className="btn btn-outline-dark">
go to product
                    </NavLink>
                  </div>
                </div>
              </div>
                )
              })}
              
            </div>
          </div>
    </>
  )
}

export default ProductList