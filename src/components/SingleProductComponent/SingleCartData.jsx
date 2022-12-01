import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";
import CartAmountToggle from "../SingleProductComponent/CartAmountToggle";
const SingleCartData = ({ product }) => {
  const { id, colors, stock } = product;
  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const { ProductDetail } = useCartContext();
  const setDecrease = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    } else {
      setAmount(1);
    }
  };
  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };
  return (
    <>
      <p className="colors  d-flex justify-content-center ">
        {colors.map((bgColor, index) => {
          return (
            <button
              key={index}
              style={{ backgroundColor: bgColor }}
              className={
                color === bgColor ? "btn_style btn_active " : "btn_style "
              }
              onClick={() => setColor(bgColor)}
            >
              {color === bgColor ? (
                <span className="mb-0">
                  <i className="fa-solid fa-check "></i>{" "}
                </span>
              ) : null}
            </button>
          );
        })}
      </p>
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />
      <NavLink
        to="/cart"
        onClick={() => ProductDetail(id, color, amount, product)}>
        <button className="btn btn-outline-dark text-capitalize">
          Add to Cart
        </button>
      </NavLink>
    </>
  );
};

export default SingleCartData;
