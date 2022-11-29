
const Filter_reducer = (state,action) => {


    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
    return{
        ...state,
    filter_products:[...action.payload],
    all_products:[...action.payload ] ,
    };

    case "GET_SORT_VALUE":
        let userSortValue = document.getElementById("sort");
        let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
        
        // console.log(sort_value);
        return{
            ...state,
            // sorting_value:sort_value,
        }
    
        default:
            return state;
    }
    

 
}

export default Filter_reducer