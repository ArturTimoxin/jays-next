
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from '../reducers';

const middleware = [thunk];

export let store;

const makeStore = initialState => {
    store = createStore(rootReducer, initialState, applyMiddleware(...middleware));
    return store;
};

export default makeStore;