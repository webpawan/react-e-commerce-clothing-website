
const Filter_reducer = (state,action) => {


    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
    return{
        ...state,
    filter_products:[...action.payload],
    all_products:[...action.payload ]   
    }
    
        default:
            break;
    }
    

  return (
    <>

    </>
  )
}

export default Filter_reducer