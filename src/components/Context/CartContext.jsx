import { useContext, createContext, useReducer,useEffect } from "react";
import reducer from "../reducer/CartReducer";

const CartContext = createContext();

const getLocalCartData = () =>{
  let newCartData = localStorage.getItem("cartData");
  // if(newCartData ===[]){
  //   return[];
  // }else{
  //   return JSON.parse(newCartData)
  // }

  const parseData = JSON.parse(localStorage.getItem(newCartData));
  if(!Array.isArray(parseData)) return [];
  return parseData
}

const intialState = {
  // cart: [],
  cart : getLocalCartData(),
  total_item: "",
  totam_price: "",
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


  // cart togle 

const setIncrement = (id) =>{
dispatch({type:"SET_INCREMENT",payload:id})
}

const setDecrement =(id) =>{
  dispatch({type:"SET_DECREMENT",payload:id})


}


// to add data in local storage 

useEffect(() => {
  // dispatch({type:"CART_TOTAL_ITEM"})
  // dispatch({type:"CART_TOTAL_PRICE"})
  dispatch({type:"CART_ITEM_PRICE_TOTAL"})
 localStorage.setItem("cartData",JSON.stringify(state.cart))
}, [state.cart]);

  return (
    <CartContext.Provider value={{ ...state, ProductDetail,removeitem,clearCart,setIncrement,setDecrement }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
