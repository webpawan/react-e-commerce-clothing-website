import { useEffect, useReducer } from "react";
import { useContext, createContext } from "react";
import reducer from "../reducer/Filter_reducer";
import { useProduct } from "./ProductContext";


const FilterContext = createContext();
const intialState = {
  filter_products: [],
  all_products: [],
  sorting_value: "lowest",
  filters: {
    text: "",
    category:"All",
    company:"All",
    color:'All',
    maxPrice:0,
    minPrice:0,
    price:0
  },
};
export const FilterContextProvider = ({ children }) => {
  const { products } = useProduct();
  const [state, dispatch] = useReducer(reducer, intialState);

  const sorting = (e) => {
    let userValue = e.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };

  const updateFilterValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    
    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };

  const clearFilters = () =>{
    dispatch({type:"CLEAR_FILTERS"})
    
  }

  useEffect(() => {
dispatch({type:"FILTERS_PRODUCTS"})
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [products,state.sorting_value,state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);
  return (
    <FilterContext.Provider value={{ ...state, sorting, updateFilterValue,clearFilters }}>
      {children}
    </FilterContext.Provider>
  );
};
export const useFileContext = () => {
  return useContext(FilterContext);
};
