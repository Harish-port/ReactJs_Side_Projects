import { ActionTypes } from "../Constants/action-types";

const initialState = {
    products: []
}
const selectedProductState = {
    cartItems:[]
}
export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state;
    }
}
export const selectedPoductReducer = (state = {}, { type, payload }) => {
    console.log(payload,"payload");
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
}

export const addItemsToCartReducer = (state = selectedProductState, { type, payload }) => {
    console.log(payload,"payload");
    switch (type) {
        case ActionTypes.ADD_PRODUCTS_TO_CART:
            return { ...state,
                cartItems: state.cartItems.concat(payload)};
        default:
            return state;
    }
}