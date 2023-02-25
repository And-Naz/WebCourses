import { legacy_createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import initialState from "./initialState";
import rootReducer from "./reducers/root.reducer";

const store = legacy_createStore(rootReducer, initialState, applyMiddleware(thunk))

export default store;