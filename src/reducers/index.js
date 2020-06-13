import { combineReducers } from 'redux';
import mlp from './mlpReducer';
import tmnt from './tmntReducer';
 
export default combineReducers({
  mlp,
  tmnt
});
