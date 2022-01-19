import { RECEIVE_EDIT_ENTRY_OBJ } from "../actions/entry_actions";



const editsReducer = (state = null, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_EDIT_ENTRY_OBJ:
      return action.entry;
    default:
      return state;
  }
};

export default editsReducer;