import { combineReducers } from 'redux';
import emailReducer from './emailReducer.js';

const rootReducer = combineReducers(
  {
    emailReducer
  }
)

export default rootReducer;
