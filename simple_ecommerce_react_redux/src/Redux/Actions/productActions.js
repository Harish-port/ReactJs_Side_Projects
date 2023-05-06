import { ActionTypes } from "../Constants/action-types";

export const setProducts = (products) => {
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload: products
    }
}
export const selectedPoduct=(product) => {
    return {
        type:ActionTypes.SELECTED_PRODUCT,
        payload: product 
    }
}

