const productreduces = (CurState, action) => {
 
  switch (action.type) {
    case "set_loading":
      return {
        ...CurState,
        isLoading: true,
      };

    case "Set_api_data":
      const featureData = action.payload.filter((CurEle) => {
        return CurEle.featured === true;
      });
      const mostSellingData = action.payload.filter((CurEle) => {
        return CurEle.MostSelling === true;
      });
      const accessoryData = action.payload.filter((CurEle) => {
        return CurEle.Accessory === true;
      });
      
      return {
        ...CurState,
        isLoading: false,
        products: action.payload,
        featureProducts: featureData,
        mostSelling:mostSellingData,
        accessory:accessoryData
      };

    case "SET_SINGLE_LOADING":
      return {
        ...CurState,
        isSingleLoading: true,
      };

    case "SET_SINGLE_PRODUCT":
      return {
        ...CurState,
        isSingleLoading: false,
        singleProducts: action.payload,
      };

    case "api_error":
      return {
        ...CurState,
        // isLoading: false,
        isError: true,
      };

    case "SET_SINGLE_ERROR":
      return {
        ...CurState,
        isSingleLoading: false,
        isError: true,
      };

    default:
      return CurState;
  }
};

export default productreduces;
