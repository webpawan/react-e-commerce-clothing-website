import axios from "axios";
import { useEffect, useReducer, useContext, createContext } from "react";
import reducer from '../reducer/productreduces'

// https://fakestoreapi.com/products/category/men's clothing
// https://fakestoreapi.com/products/category/women's clothing
const AppContext = createContext();

const api = "https://fakestoreapi.com/products/category/men's clothing";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({type:"set_loading"});
try {
  const res = await axios.get(url);
  const products = await res.data;
  dispatch({type:"Set_api_data",payload:products})
} catch (error) {
  dispatch({type:"api_error"})
}
  };

  useEffect(() => {
    getProducts('db.json');
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

// custome hook start////////////////////////////////
const useProduct = () => {
  return useContext(AppContext);
};
// custome hook end////////////////////////////////

export { AppProvider, AppContext, useProduct };
