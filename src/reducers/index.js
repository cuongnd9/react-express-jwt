import { combineReducers } from 'redux';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({ errorReducer });

export default rootReducer;
