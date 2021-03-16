import { combineReducers } from 'redux';

import { authentication } from './authReducer';
import { register } from './registrationReducer';
import { alert } from './alertReducer';

const rootReducer = combineReducers({
  authentication,
  alert,
  register
});

export default rootReducer;