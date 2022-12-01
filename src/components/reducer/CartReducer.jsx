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
if(newAmount >= curElem.stock){
  newAmount = curElem.stock
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

  return state;
};

export default CartReducer;
