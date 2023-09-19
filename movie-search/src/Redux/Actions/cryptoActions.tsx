import { CryptoInfo } from "../../models/Crypto";
import { ActionTypes } from "../Constants/action-types";

export const setCrypto = (crypto: CryptoInfo[]) => {
    return {
        type: ActionTypes.FETCH_CRYPTO_DATA,
        payload: crypto
    };
};