const productreduces = (CurState, action) => {
  // if(action.type === "set_loading"){
  //   return{
  //     ...CurState,
  //     isLoading:true,
  //   };
  // } else if{

  // } this is not good way for chacking statement in this case so i will use switch case

  switch (action.type) {
    case "set_loading":
      return {
        ...CurState,
        isLoading: true,
      };

    case "Set_api_data":
      const featureData = action.payload.filter((CurEle)=>{
        return CurEle.feature !== true;
      })

      return{
        ...CurState,
        isLoading:false,
        products: action.payload,
        featureProducts: featureData,
      }

    case "api_error":
      return {
        ...CurState,
        isLoading: false,
        isError: true,
      };
      
      default :
      return CurState
  }
};

export default productreduces;
