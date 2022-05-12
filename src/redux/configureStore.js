import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import missionReducer from './mission/mission';
import Rockets from './Rockets/Rockets';

const reducer = combineReducers({ missionReducer, Rockets });

const store = createStore(reducer, {}, applyMiddleware(thunk));

export default store;
