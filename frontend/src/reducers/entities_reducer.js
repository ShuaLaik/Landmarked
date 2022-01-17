import { combineReducers } from 'redux';
import entries from './entries_reducer';

const entitiesReducer = combineReducers({
  entries
});

export default entitiesReducer;