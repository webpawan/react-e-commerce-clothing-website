import { useEffect, useReducer } from "react";
import { useContext ,createContext} from "react";
import reducer from "../reducer/Filter_reducer";
import { useProduct } from "./ProductContext";


const FilterContext = createContext();

const intialState = {

filter_products:[],
all_products:[],

}


export const FilterContextProvider = ({ children }) => {
  
const {products} = useProduct();

const [state,dispatch] = useReducer(reducer,intialState);

useEffect(()=>{
  dispatch({type:"LOAD_FILTER_PRODUCTS",payload:products})
},[products])

  return (
    <FilterContext.Provider value="bhia">
      {children}
    </FilterContext.Provider>
  );
};

export const useFileContext = () => {
  return  useContext(FilterContext);
};
