import { combineReducers } from 'redux';
import board from './board';
import user from './user';

const rootReducer = combineReducers({
  board,
  user
});

export default rootReducer;