import { combineReducers } from 'redux';
import entries from './entries_reducer';
import trips from './trips_reducer';


const entitiesReducer = combineReducers({
  entries,
  trips
});

export default entitiesReducer;