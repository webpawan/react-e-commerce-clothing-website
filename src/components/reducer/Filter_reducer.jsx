const Filter_reducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };

    case "GET_SORT_VALUE":
      return {
        ...state,
        sorting_value: action.payload,
      };
    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFiltersProducts = [...all_products];
      const { text } = state.filters;
      if (text) {
        tempFiltersProducts.filter((curElem) => {
          return curElem.name.toLowerCase().includes(text)
        });
      }
      return {
        ...state,
        filter_products: tempFiltersProducts,
      };
    default:
      return state;
  }
};

export default Filter_reducer;
