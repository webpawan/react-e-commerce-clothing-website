import React from "react";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <>
      <div className="counter d-flex justify-content-center my-4">
        <button className="btn btn-outline-dark" onClick={() => setIncrease()}>
        <i className="fa-solid fa-plus"></i>
        </button>
        <h4 className="my-1 mx-3">{amount}</h4>
        <button className="btn btn-outline-dark" onClick={() => setDecrease()}>
        <i className="fa-solid fa-minus"></i>
        </button>
      </div>
    </>
  );
};

export default CartAmountToggle;
