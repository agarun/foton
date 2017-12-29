import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS
} from '../../actions/session_actions';

import { CLEAR_ERRORS } from '../../actions/error_actions';

const sessionErrorsReducer = (state = null, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
    case CLEAR_ERRORS:
      return null;
    default:
      return state;
  }
};

export default sessionErrorsReducer;
