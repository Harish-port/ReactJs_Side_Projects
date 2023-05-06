import { combineReducers } from 'redux';
import { productReducer,selectedPoductReducer ,addItemsToCartReducer} from './productReducer';
const reducers = combineReducers({
    allProducts: productReducer,
    product:selectedPoductReducer,
    cartAllItems:addItemsToCartReducer
});

export default reducers;