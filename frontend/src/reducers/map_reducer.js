import { RECEIVE_TRIP_ID } from "../actions/map_actions";



const mapReducer = (state = null, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TRIP_ID:
      return action.tripId;
    default:
      return state;
  }
};

export default mapReducer;