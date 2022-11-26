import { useEffect, useReducer } from "react";
import { useContext, createContext } from "react";
import reducer from "../reducer/Filter_reducer";
import { useProduct } from "./ProductContext";


const FilterContext = createContext();
const intialState = {
  filter_products: [],
  all_products: [],
  sorting_value: "lowest",
  filters:{
    text:"",
  }
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProduct();
  const [state, dispatch] = useReducer(reducer, intialState);

  const sorting = (e) => {
    let userValue = e.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };



  // sort the products ---
  useEffect(() => {
    dispatch({type:"FILTER_PRODUCTS"})
    dispatch({ type: "SORTING_PRODUCTS", payload: products });
  }, [state.sorting_value,state.filters]);
  // -----

const updateFilterValue = (e)=>{
let name = e.target.name;
let value = e.target.value;

return dispatch({type:"UPDATE_FILTER_VALUE",payload:{ name,value}})
}


  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state, sorting,updateFilterValue }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFileContext = () => {
  return useContext(FilterContext);
};
