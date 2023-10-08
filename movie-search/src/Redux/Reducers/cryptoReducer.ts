import { CryptoState, ActionType } from "../../models/Crypto";
import { ActionTypes } from "../Constants/action-types";

const initialState = {
    crypto: []
}

export const cryptoReducer = (state: CryptoState = initialState, action: ActionType) => {
    switch (action.type) {
        case ActionTypes.FETCH_CRYPTO_DATA:
            return { ...state, crypto: action.payload };
        default:
            return state;
    }
}
