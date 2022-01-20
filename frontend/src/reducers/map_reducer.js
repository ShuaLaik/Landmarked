import { RECEIVE_TRIP_ID, RESET_TRIP_ID } from "../actions/map_actions";



const mapReducer = (state = null, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TRIP_ID:
      return action.tripId;
    case RESET_TRIP_ID:
      return null;
    default:
      return state;
  }
};

export default mapReducer;