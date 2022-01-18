import { RECEIVE_ENTRY_ERRORS } from "../actions/entry_actions";


const _nullErrors = [];

const entryErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ENTRY_ERRORS:
      return action.errors.data;
    default:
      return state;
  }
};

export default entryErrorsReducer;