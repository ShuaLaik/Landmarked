export const RECEIVE_TRIP_ID = 'RECEIVE_TRIP_ID';
export const RESET_TRIP_ID = 'RESET_TRIP_ID';

export const receiveTripId = tripId => {
  return {
    type: RECEIVE_TRIP_ID,
    tripId
  };
};
export const resetTripId = () => {
  return {
    type: RESET_TRIP_ID,
  };
};
