import { combineReducers } from 'redux';
import entryErrorsReducer from './entries_errors_reducer';

import sessionErrorsReducer from './session_errors_reducer';

export default combineReducers({
  session: sessionErrorsReducer,
  entryErrors: entryErrorsReducer
});