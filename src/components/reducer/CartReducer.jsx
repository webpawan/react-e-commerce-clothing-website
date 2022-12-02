const CartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;

    let exitingProduct = state.cart.find(
      (curItem) => curItem.id === id + color
    );

    if (exitingProduct) {
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id === id + color) {
          let newAmount = curElem.amount + amount;
          if (newAmount >= curElem.stock) {
            newAmount = curElem.stock;
          }
          return {
            ...curElem,
            amount: newAmount,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        img: product.img,
        price: product.price,
        stock: product.stock,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }
  if (action.type === "REMOVE_ITEM") {
    let updateCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );

    return {
      ...state,
      cart: updateCart,
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
     if(curElem.id === action.payload){
      let decAmount = curElem.amount -1;


      if(decAmount <= 0){
        decAmount =1;
      }
      return{
        ...curElem,
        amount:decAmount,
      }
     }else{
      return curElem;
     }
    });
   return {...state,cart:updatedProduct}
  }

  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
     if(curElem.id === action.payload){
      let incAmount = curElem.amount + 1;


      if(incAmount >=  curElem.stock){
        incAmount =curElem.stock;
      }
      return{
        ...curElem,
        amount:incAmount,
      }
     }else{
      return curElem;
     }
    });
   return {...state,cart:updatedProduct}
  }

  if(action.type === "CART_TOTAL_ITEM"){
    let updatedItemVal = state.cart.reduce((intialVal,curElem)=>{
      let {amount} = curElem;

      intialVal = intialVal + amount;
      return intialVal
    },0)
    return{
      ...state,
      total_item:updatedItemVal,
    }
  }

  if(action.type === "CART_TOTAL_PRICE"){

let total_price = state.cart.reduce((intialVal,curElem)=>{
  let {price , amount } = curElem;


  intialVal = intialVal + price*amount;
  return intialVal
},0)
return{...state,
total_price}

  }

  return state;
};

export default CartReducer;
