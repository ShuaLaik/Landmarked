import * as EntryAPIUtil from '../util/entry_api_util';

export const RECEIVE_ENTRIES = "RECEIVE_ENTRIES";
export const RECEIVE_ENTRY = "RECEIVE_ENTRY";
export const REMOVE_ENTRY = "REMOVE_ENTRY";
export const RECEIVE_ENTRY_ERRORS = "RECEIVE_ENTRY_ERRORS";

const receiveEntries = entries => ({
  type: RECEIVE_ENTRIES,
  entries
});

const receiveEntry = entry => ({
  type: RECEIVE_ENTRY,
  entry
});

const removeEntry = entryId => ({
  type: REMOVE_ENTRY,
  entryId
});

const receiveEntryErrors = (errors) => ({
    type: RECEIVE_ENTRY_ERRORS,
    errors
})

export const fetchAllUserEntries = (userId) => dispatch => (
    EntryAPIUtil.fetchAllUserEntries(userId)
      .then(entries => dispatch(receiveEntries(entries)), 
      err => dispatch(receiveEntryErrors(err.responseJSON))
    )
)

// NEEDS TO BE REFACTORED AFTER DECIDING FUNCTIONALITY!
export const fetchAllLocationEntries = (locationId) => dispatch => (
    EntryAPIUtil.fetchAllLocationEntries(locationId)
      .then(entries => dispatch(receiveEntries(entries)), 
      err => dispatch(receiveEntryErrors(err.responseJSON))
    )
);
  
export const createEntry = (entry) => dispatch => (
    EntryAPIUtil.createEntry(entry)
        .then(entry => dispatch(receiveEntry(entry)), 
        err => dispatch(receiveEntryErrors(err.responseJSON))
    )
);

export const updateEntry = (entry) => dispatch => (
    EntryAPIUtil.updateEntry(entry)
        .then(entry => dispatch(receiveEntry(entry)), 
        err => dispatch(receiveEntryErrors(err.responseJSON))
    )
);

export const deleteEntry = (entryId) => dispatch => (
    EntryAPIUtil.deleteEntry(entryId)
        .then(() => dispatch(removeEntry(entryId)), 
        err => dispatch(receiveEntryErrors(err.responseJSON))
    )
);
