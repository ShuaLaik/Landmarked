export const RECEIVE_TRIP_ID = 'RECEIVE_TRIP_ID';

export const receiveTripId = tripId => {
  return {
    type: RECEIVE_TRIP_ID,
    tripId
  };
};
