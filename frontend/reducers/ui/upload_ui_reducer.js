import { TOGGLE_MODAL, FETCH_UPLOAD } from '../../actions/ui_actions';
import { RECEIVE_PHOTO, RECEIVE_UPLOAD_ERRORS } from '../../actions/photo_actions';

const initialState = {
  isFetching: false,
};

const uploadUiReducer = (state = initialState, action) => {
  Object.freeze(state);

  let newState = Object.assign({}, state);
  switch (action.type) {
    case FETCH_UPLOAD:
      newState.isFetching = true;
      return newState;
    case TOGGLE_MODAL:
    case RECEIVE_UPLOAD_ERRORS:
      newState.isFetching = false;
      return newState;
    case RECEIVE_PHOTO:
      return initialState;
    default:
      return state;
  }
};

export default uploadUiReducer;
