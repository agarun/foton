import {
  RECEIVE_PHOTO
} from '../../actions/photo_actions';

// import { CLEAR_ERRORS } from '../../actions/error_actions';

const photosReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PHOTO:
      const newPhotoId = action.photo.id;
      const newPhoto = { [newPhotoId]: action.photo };
      debugger
      return Object.assign({}, state, newPhoto);
    default:
      return state;
  }
};

export default photosReducer;
