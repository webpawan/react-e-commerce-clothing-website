import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "./Context/ProductContext";
import MyImags from "./SingleProductComponent/MyImags";
import Stars from "./SingleProductComponent/Stars";
import ColorSingleProduct from "./SingleProductComponent/ColorSingleProduct";
import CartAmountToggle from "./SingleProductComponent/CartAmountToggle";
import Navigation from "./utility/Navigation";
import Heading from "./utility/Heading";
const API = "http://localhost:3000/data";
const SingleProducts = () => {
  const { getSingleProducts, isSingleLoading, singleProducts } = useProduct();
  const { id } = useParams();
  const {
    // id: singleProductId,
    name,
    price,
    desc,
    imgs,
    stars,
  } = singleProducts;
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    } else {
      setAmount(1);
    }
  };

  const setIncrease = () => {
    setAmount(amount + 1);
  };

  useEffect(() => {
    getSingleProducts(`${API}/${id}`);
  }, []);

  if (isSingleLoading) {
    return <h1 className="loading">...loading Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eligendi eaque veniam eum et iste, quisquam quis voluptates harum iure eos aliquid ipsa, incidunt libero doloremque delectus autem ea minima dolor adipisci repellat reiciendis distinctio. Recusandae inventore, quos accusantium, adipisci nam quaerat delectus fuga velit similique temporibus aut repudiandae. Quae?</h1>;
  }

  return (
    <>
      <div className="container-fluid py-3">
        <div className="row">
          <div className="my-5"><Navigation name={name} page="home" /></div>
          <MyImags imgs={imgs} />
          <div className="col-10 col-md-5 text-center mx-auto bg-light my-2">
            <Heading name={name} />

            <p className="text-center mx-auto  pera p-4 mb-0">{desc}</p>

            <Stars ProductStars={stars} />

            <h4 className="mb-4">${price}</h4>
            <ColorSingleProduct products={singleProducts} />
            <CartAmountToggle
              amount={amount}
              setDecrease={setDecrease}
              setIncrease={setIncrease}
            />

            <button className="btn btn-outline-dark text-capitalize">
              add to cart
            </button>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default SingleProducts;
