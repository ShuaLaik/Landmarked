import { RECEIVE_TRIPS,
    RECEIVE_TRIP,
    REMOVE_TRIP } from '../actions/trip_actions';

const tripsReducer = (prevState = {}, action) => {
Object.freeze(prevState);
let newState = Object.assign({}, prevState);
switch(action.type) {
  case RECEIVE_TRIPS:
    action.trips.data.forEach(trip => newState[trip._id] = trip) // data?
    return newState;
  case RECEIVE_TRIP:
    return newState[action.trip.data._id] = action.trip.data; // data?
  case REMOVE_TRIP:
    delete newState[action.tripId]
    return newState;
  default:
    return prevState;
}
};

export default tripsReducer;