const FilterReducer = (state, action) => {
    if (action.type == "FilterProduct") {
        return {
            ...state,
            Filter_Product: [...action.payload],
            All_Product: [...action.payload]
        }
    }
    // Get Shorting Product
    // Get Shorting Product
    if (action.type == "GET_DROPDOWN_VALU") {
        return {
            ...state,
            Dropdwon: action.payload,
        }
    }

    if (action.type == "UPDATE_FILTERS_VALUE") {
        const { name, value } = action.payload
        return {
            ...state,
            filters: {
                ...state.filters,
                [name]: value
            }
        }
    }

    if (action.type == "FILTER_PRODUCTS") {
        let { All_Product } = state;
        let tempFilterProduct = [...All_Product]

        const { text,category } = state.filters;
        if (text) {
            tempFilterProduct = tempFilterProduct.filter((currentElm) => {
                return currentElm.name.toLowerCase().includes(text);
            })
        }


        if(category !== "All"){
            tempFilterProduct = tempFilterProduct.filter((crrentElm) => {
                return crrentElm.category === category;
            })
        }

        return {
            ...state,
            Filter_Product: tempFilterProduct
        }
    }


    return state
}
export default FilterReducer