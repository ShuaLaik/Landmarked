import { combineReducers } from 'redux';

import modalReducer from './modal_reducer';
import editsReducer from './edits_reducer';
import mapReducer from './map_reducer';

const uiReducer = combineReducers({
  modal: modalReducer,
  edit: editsReducer,
  selectedTrip: mapReducer
});

export default uiReducer;