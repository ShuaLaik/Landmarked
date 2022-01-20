import { RECEIVE_ENTRIES,
        RECEIVE_ENTRY,
        REMOVE_ENTRY } from '../actions/entry_actions';
  
  const entriesReducer = (prevState = {}, action) => {

    Object.freeze(prevState);
    let newState = Object.assign({}, prevState);

    switch(action.type) {
      case RECEIVE_ENTRIES:
        debugger
        if(action.entries.data) {
          action.entries.data.forEach(entry => newState[entry._id] = entry) // data?
        }
        return newState;
      case RECEIVE_ENTRY:
        newState[action.entry.data._id] = action.entry.data; // data?
        return newState;
      case REMOVE_ENTRY:
        delete newState[action.entryId]
        return newState;
      default:
        return prevState;
    }
  };
  
export default entriesReducer;
