import { combineReducers } from 'redux';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({ errors: errorReducer });

export default rootReducer;
