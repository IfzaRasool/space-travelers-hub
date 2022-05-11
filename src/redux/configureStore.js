import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import missionReducer from './mission/mission';

const reducer = combineReducers({ missionReducer });

const store = createStore(reducer, {}, applyMiddleware(thunk));

export default store;
