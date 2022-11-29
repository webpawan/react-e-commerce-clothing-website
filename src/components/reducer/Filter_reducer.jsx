const Filter_reducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let priceArr = action.payload.map((curElem) => {
        return curElem.price;
      });

      //  let maxPrice = Math.max(...priceArr);

      let maxPrice = priceArr.reduce(
        (intialVal, curVal) => Math.max(intialVal, curVal),
        0
      );

      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: { ...state.filters, maxPrice, price: maxPrice },
      };

    case "GET_SORT_VALUE":
      // let userSortValue = document.getElementById("sort");
      // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
      return {
        ...state,
        // sorting_value: sort_value,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      // let tempSortData = [...action.payload];
      const { filter_products } = state;
      let tempSortData = [...filter_products];

      const sortingProducts = (a, b) => {
        if (state.sorting_value === "lowest") {
          return a.price - b.price;
        }

        if (state.sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }

        if (state.sorting_value === "highest") {
          return b.price - a.price;
        }

        if (state.sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };

      newSortData = tempSortData.sort(sortingProducts);
      return {
        ...state,
        filter_products: newSortData,
      };

    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTERS_PRODUCTS":
      let { all_products } = state;
      let tempFilterProducts = [...all_products];

      const { text, category, company, color, price } = state.filters;

      if (text) {
        tempFilterProducts = tempFilterProducts.filter((curElem) => {
          return curElem.name.toLowerCase().includes(text);
        });
      }

      if (category !== "All") {
        tempFilterProducts = tempFilterProducts.filter((curElem) => {
          return curElem.category === category;
        });
      }

      if (company !== "All") {
        tempFilterProducts = tempFilterProducts.filter((curElem) => {
          return curElem.company.toLowerCase() === company.toLowerCase();
        });
      }

      if (color !== "All") {
        tempFilterProducts = tempFilterProducts.filter((curElem) => {
          return curElem.colors.includes(color);
        });
      }

      if (price===0) {
        tempFilterProducts = tempFilterProducts.filter(
          (curElem) => curElem.price === price
        );
      }else{
        tempFilterProducts = tempFilterProducts.filter(
          (curElem) => curElem.price <= price
        );
      }

      return {
        ...state,
        filter_products: tempFilterProducts,
      };

      case "CLEAR_FILTERS":
        return{
          ...state,
          filters:{
            text: "",
            category:"All",
            company:"All",
            color:'All',
            maxPrice:state.filters.maxPrice,
            minPrice:0,
            price:state.filters.maxPrice
          }
        }

    default:
      return state;
  }
};

export default Filter_reducer;
