import {
  RECEIVE_PHOTO
} from '../../actions/photo_actions';

const photosReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PHOTO:
      const newPhotoId = action.photo.id;
      const newPhoto = { [newPhotoId]: action.photo };
      return Object.assign({}, state, newPhoto);
    default:
      return state;
  }
};

export default photosReducer;
