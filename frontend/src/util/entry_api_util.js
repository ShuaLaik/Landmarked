import axios from 'axios';

// POTENTIAL - may need single entry
// export const getEntry = (id) => { 
//   return axios.get(`/api/entries/${id}`)
// };

export const fetchAllUserEntries = userId => {
  return axios.get(`/api/entries/user/${userId}`)
};

export const fetchAllLocationEntries = locationId => {
  return axios.get(`/api/entries/location/${locationId}`)
};

export const createEntry = entry => {
  return axios.post('/api/entries/', entry)
};

export const updateEntry = entry => {
  return axios.patch(`/api/entries/${entry._id}`, entry) // double check
};

export const deleteEntry = entryId => {
  return axios.delete(`/api/entries/${entryId}`, entryId)
};