import { ActionTypes } from "../Constants/action-types";

export const setPoducts=(products) => {
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload: products
    }
}
export const selectedPoduct=(products) => {
    return {
        type:ActionTypes.SELECTED_PRODUCT,
        payload: products
    }
}
