import axios from "axios";
import {
  useEffect,
  useReducer,
  useContext,
  createContext,
  useState,
} from "react";
import reducer from "../reducer/productreduces";

const AppContext = createContext();

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  mostSelling:[],
  accessory:[],
  isSingleLoading: false,
  singleProducts: {},
};


// ----------------------------------------------------main function
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
 const [page, setPage] = useState(1);
  // pagination -------------

  const previousPage = () => {
    if(page <= 1){
      return;
    }

    setPage(page - 1);
  };

  const nextPage = () => {
   if(page === 2){
    return setPage(1);
   }

   setPage( page + 1)
  };

  // ---------------
  const getProducts = async (page) => {
    dispatch({ type: "set_loading" });
    try {
      const api = `http://localhost:3000/data?_page=${page}&_limit=7`;
      const res = await axios.get(api);
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
    getProducts(page);
  }, [page]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        getSingleProducts,
        previousPage,
        nextPage,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custome hook start////////////////////////////////////////////////////////////////////////
const useProduct = () => {
  return useContext(AppContext);
};
// custome hook end//////////////////////////////////////////////////////////////////////

export { AppProvider, AppContext, useProduct };
