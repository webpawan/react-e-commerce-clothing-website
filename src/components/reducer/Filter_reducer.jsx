const Filter_reducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };

    case "GET_SORT_VALUE":
      let userSortValue = document.getElementById("sort");
      let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
      return {
        ...state,
        sorting_value: sort_value,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      let tempSortData = [...action.payload];

      if (state.sorting_value === "a-z") {
        newSortData = tempSortData.sort((a, b) => a.name.localeCompare(b.name));
      }
      if (state.sorting_value === "z-a") {
        newSortData = tempSortData.sort((a, b) => b.name.localeCompare(a.name));
      }
      if (state.sorting_value === "lowest") {
        // newSortData = tempSortData.sort((a, b) => b.name.localeCompare(a.name));
        const sortingProducts = (a,b) =>{
          return a.price - b.price;
        }
        newSortData = tempSortData.sort(sortingProducts)
      }
      if (state.sorting_value === "highest") {
        // newSortData = tempSortData.sort((a, b) => b.name.localeCompare(a.name));
        const sortingProducts = (a,b) =>{
          return b.price - a.price;
        }
        newSortData = tempSortData.sort(sortingProducts)
      }
      
      return {
        ...state,
        
        filter_products: newSortData,
      };

    default:
      return state;
  }
};

export default Filter_reducer;
