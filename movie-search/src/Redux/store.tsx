import { EmptyObject, createStore } from 'redux';
import { reducers } from './Reducers';
import { compose } from "redux";
import { globalState } from '../models/Crypto';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const saveState = (state: EmptyObject | globalState) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (e) {
        // Ignore write errors;
    }
};

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (e) {
        return undefined;
    }
};

const peristedState = loadState();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, peristedState, composeEnhancers());

store.subscribe(() => {
    saveState(store.getState());
});

export default store;
