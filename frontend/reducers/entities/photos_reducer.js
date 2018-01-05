import {
  RECEIVE_PHOTO,
  RECEIVE_PHOTO_FEED,
} from '../../actions/photo_actions';

import {
  RECEIVE_CURRENT_USER,
} from '../../actions/session_actions';

import {
  RECEIVE_USER,
} from '../../actions/user_actions';

const photosReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PHOTO: {
      const newPhotoId = action.photo.id;
      const newPhoto = { [newPhotoId]: action.photo };
      return Object.assign({}, state, newPhoto);
    }
    case RECEIVE_USER:
      return action.user.photos ? action.user.photos : state;
    case RECEIVE_CURRENT_USER:
      return action.currentUser === null ? state : {};
    case RECEIVE_PHOTO_FEED:
      return action.feedData.photos || {};
    default:
      return state;
  }
};

export default photosReducer;
