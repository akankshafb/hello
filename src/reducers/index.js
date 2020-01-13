import {combineReducers} from 'redux';
import printHelloReducer from './pringHelloWorldReducer';
import addTocart from './addTocart';

const combinedReducers = combineReducers({data:addTocart});

export default combinedReducers;