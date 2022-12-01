import { useContext, createContext, useReducer,useEffect } from "react";
import reducer from "../reducer/CartReducer";

const CartContext = createContext();

const getLocalCartData = () =>{
  let newCartData = localStorage.getItem("cartData");
  if(newCartData ===[]){
    return[];;
  }else{
    return JSON.parse(newCartData)
  }
}

const intialState = {
  // cart: [],
  cart : getLocalCartData(),
  total_item: "",
  totam_amount: "",
  shipping_fee: 500,
};
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const ProductDetail = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  const removeitem  = (id) =>{
dispatch({type:"REMOVE_ITEM",payload:id})
  }

  const clearCart = () =>{
    dispatch({type:"CLEAR_CART"})
  }

// to add data in local storage 

useEffect(() => {
 localStorage.setItem("cartData",JSON.stringify(state.cart))
}, [state.cart]);

  return (
    <CartContext.Provider value={{ ...state, ProductDetail,removeitem,clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
