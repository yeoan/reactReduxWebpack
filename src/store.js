import { createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import yourReducer from './reducers/yourReducer.js'

const initialState = {};

const middleware = [thunk];

const composedReducer = combineReducers({
  yourReducer : yourReducer
});

const store = createStore(composedReducer,initialState, applyMiddleware(...middleware));

export default store;
