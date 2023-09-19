import { combineReducers } from 'redux';
import { cryptoReducer } from './cryptoReducer';

export const reducers = combineReducers({
    allCryptoItems: cryptoReducer
})