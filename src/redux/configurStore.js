import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import Rockets from './Rockets/Rockets';

const rootReducer = combineReducers({ Rockets });
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
