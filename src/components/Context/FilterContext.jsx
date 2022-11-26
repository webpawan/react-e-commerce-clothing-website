import { useEffect, useReducer } from "react";
import { useContext, createContext } from "react";
import reducer from "../reducer/Filter_reducer";
import { useProduct } from "./ProductContext";

const FilterContext = createContext();
const intialState = {
  filter_products: [],
  all_products: [],
  sorting_value: "lowest",
};
export const FilterContextProvider = ({ children }) => {
  const { products } = useProduct();
  const [state, dispatch] = useReducer(reducer, intialState);
  const sorting = () => {
    dispatch({ type: "GET_SORT_VALUE" });
    
  };
  useEffect(() => {
    dispatch({type:"SORTING_PRODUCTS",payload:products});
  }, [state.sorting_value,products]);
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);
  return (
    <FilterContext.Provider value={{ ...state, sorting }}>
      {children}
    </FilterContext.Provider>
  );
};
export const useFileContext = () => {
  return useContext(FilterContext);
};
