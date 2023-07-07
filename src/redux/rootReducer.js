import { combineReducers } from 'redux';
import authReducer from './authReducer';
import messageReducer from './reducers/messageReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  message: messageReducer,
});

export default rootReducer;
