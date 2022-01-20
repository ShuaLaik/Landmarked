import { RECEIVE_TRIPS,
    RECEIVE_TRIP,
    REMOVE_TRIP } from '../actions/trip_actions';


const tripsReducer = (prevState = {}, action) => {

Object.freeze(prevState);

let newState = Object.assign({}, prevState);

switch(action.type) {
  case RECEIVE_TRIPS:
    action.trips.data.forEach(trip => newState[trip._id] = trip) 
    return newState;
  case RECEIVE_TRIP:
    newState[action.trip.data._id] = action.trip.data; 
    return newState;
  case REMOVE_TRIP:
    delete newState[action.tripId]; 
    return newState;
  default:
    return prevState;
}
};

export default tripsReducer;