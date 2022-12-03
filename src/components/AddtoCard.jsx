import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useCartContext } from "./Context/CartContext";
import Cartitem from "./AddtoCartComponent/Cartitem";
import { NavLink } from "react-router-dom";
import Heading from "./utility/Heading";

const AddtoCard = () => {
  const { cart, clearCart } = useCartContext();
  const { total_price } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <div className="container py-5">
          <Navbar />
        </div>
        <div className="py-5  mx-auto text-center">
          <Heading name="No item in the cart" />
        </div>
        <div className="d-flex justify-content-center">
          <NavLink to="/products">
            <button className="btn btn-outline-dark text-capitalize mx-2 mb-2 ">
              contine shopping
            </button>
          </NavLink>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="container py-5">
        <Navbar />
      </div>
      <div className="container ">
        <div className="row mx-auto py-3 bg-light">
          <div className="col-12 d-flex justify-content-between align-items-center mx-auto ">
            <div className="col-sm-2 col-4 text-center mx-auto">
              <h5 className="heading-1 text-capitalize size">item</h5>
            </div>
            <div className="col-2 text-center mx-auto cart_hide">
              <h5 className="heading-1 text-capitalize size ">price</h5>
            </div>
            <div className="col-sm-2 col-4 text-center mx-auto">
              <h5 className="heading-1 text-capitalize size">quantity</h5>
            </div>
            <div className="col-2 text-center mx-auto cart_hide">
              <h5 className="heading-1 text-capitalize size">subTotal</h5>
            </div>
            <div className="col-sm-2 col-4 text-center mx-auto">
              <h5 className="heading-1 text-capitalize size">remove</h5>
            </div>
          </div>
          <hr />
          <div>
            {cart.map((curElem) => {
              return <Cartitem key={curElem.id} {...curElem} />;
            })}
            <hr className="w-90 mx-atuo my-2" />
          </div>

          <div className="col-12 d-sm-flex justify-content-between align-items-center mt-5 mx-auto text-center ">
            <NavLink to="/products">
              <button className="btn btn-outline-dark text-capitalize mx-2 my-2 ">
                contine shopping
              </button>
            </NavLink>
            <button
              className="btn btn-outline-danger text-capitalize mx-2"
              onClick={clearCart}
            >
              clear cart
            </button>
          </div>
        </div>
        <div className="row my-3 ">
          <div className="col d-sm-flex justify-content-end ">
            <div className="cart_box bg-light p-4">
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="lead text-capitalize me-5">total order </h6>{" "}
                <h6 className="lead">&#x20B9; {total_price}</h6>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddtoCard;
