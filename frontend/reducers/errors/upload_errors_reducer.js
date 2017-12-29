import {
  RECEIVE_PHOTO,
  RECEIVE_UPLOAD_ERRORS
} from '../../actions/photo_actions';

import { CLEAR_ERRORS } from '../../actions/error_actions';

const uploadErrorsReducer = (state = null, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_UPLOAD_ERRORS:
      return action.errors;
    case RECEIVE_PHOTO:
    case CLEAR_ERRORS:
      return null;
    default:
      return state;
  }
};

export default uploadErrorsReducer;
