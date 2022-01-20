import axios from 'axios';

export const fetchAllUserTrips = userId => {
  return axios.get(`/api/trips/user/${userId}`)
};

export const createTrip = trip => {
  return axios.post('/api/trips/', trip)
};

export const updateTrip = trip => {
  return axios.patch(`/api/trips/${trip._id}`, trip) // double check
};

export const deleteTrip = tripId => {
  return axios.delete(`/api/trips/${tripId}`, tripId)
};