import {
  RECEIVE_PHOTO,
  RECEIVE_PHOTO_FEED,
} from '../../actions/photo_actions';

const photosReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PHOTO: {
      const newPhotoId = action.photo.id;
      const newPhoto = { [newPhotoId]: action.photo };
      return Object.assign({}, state, newPhoto);
    }
    case RECEIVE_PHOTO_FEED:
      return action.feedData.photos || {};
    default:
      return state;
  }
};

export default photosReducer;
