import { ActionTypes } from "../Constants/action-types";

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    };
};

export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    };
};

export const addSelectedProductToCart = (product) => {
    return {
        type: ActionTypes.ADD_PRODUCTS_TO_CART,
        payload: product
    };
};