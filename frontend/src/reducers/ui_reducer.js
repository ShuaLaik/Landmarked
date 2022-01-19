import { combineReducers } from 'redux';

import modalReducer from './modal_reducer';
import editsReducer from './edits_reducer';

const uiReducer = combineReducers({
  modal: modalReducer,
  edit: editsReducer
});

export default uiReducer;