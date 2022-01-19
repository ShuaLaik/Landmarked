import * as TripAPIUtil from '../util/trip_api_util';

export const RECEIVE_TRIPS = "RECEIVE_TRIPS";
export const RECEIVE_TRIP = "RECEIVE_TRIP";
export const REMOVE_TRIP = "REMOVE_TRIP";
export const RECEIVE_TRIP_ERRORS = "RECEIVE_TRIP_ERRORS";

const receiveTrips = trips => ({
  type: RECEIVE_TRIPS,
  trips
});

const receiveTrip = trip => ({
  type: RECEIVE_TRIP,
  trip
});

const removeTrip = tripId => ({
  type: REMOVE_TRIP,
  tripId
});

const receiveTripErrors = (errors) => ({
    type: RECEIVE_TRIP_ERRORS,
    errors
})

export const fetchAllUserTrips = (userId) => dispatch => (
    TripAPIUtil.fetchAllUserTrips(userId)
      .then(trips => dispatch(receiveTrips(trips)), 
      err => dispatch(receiveTripErrors(err.responseJSON))
    )
);
  
export const createTrip = (trip) => dispatch => (
    TripAPIUtil.createTrip(trip)
        .then(trip => dispatch(receiveTrip(trip)), 
        err => dispatch(receiveTripErrors(err.responseJSON))
    )
);

export const updateTrip = (trip) => dispatch => (
    TripAPIUtil.updateTrip(trip)
        .then(trip => dispatch(receiveTrip(trip)), 
        err => dispatch(receiveTripErrors(err.responseJSON))
    )
);

export const deleteTrip = (tripId) => dispatch => (
    TripAPIUtil.deleteTrip(tripId)
        .then(() => dispatch(removeTrip(tripId)), 
        err => dispatch(receiveTripErrors(err.responseJSON))
    )
);
