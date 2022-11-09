import axios from "axios";
import { useEffect, useReducer, useContext, createContext } from "react";
import reducer from "../reducer/productreduces";


const AppContext = createContext();

// const api = "https://fakestoreapi.com/products/category/men's clothing";
const api = "http://localhost:3000/data";
const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProducts: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "set_loading" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "Set_api_data", payload: products });
    } catch (error) {
      dispatch({ type: "api_error" });
    }
  };

  // second api call for single products

  const getSingleProducts = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProducts = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProducts });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(api);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProducts }}>
      {children}
    </AppContext.Provider>
  );
};

// custome hook start////////////////////////////////
const useProduct = () => {
  return useContext(AppContext);
};
// custome hook end////////////////////////////////

export { AppProvider, AppContext, useProduct };
