import {
  RECEIVE_PHOTO,
  REMOVE_PHOTO,
  FETCH_PHOTO_FEED_PAGE,
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
    case REMOVE_PHOTO: {
      const newState = Object.assign({}, state);
      delete newState[action.photo.id];
      return newState;
    }
    case RECEIVE_USER:
      return action.user.photos || state;
    case RECEIVE_CURRENT_USER:
      return action.currentUser === null ? state : {};
    case FETCH_PHOTO_FEED_PAGE:
      return action.index === 1 ? {} : state;
    case RECEIVE_PHOTO_FEED: {
      const nextFeed = Object.assign({}, state, action.feedData.photos);
      return nextFeed;
    }
    default:
      return state;
  }
};

export default photosReducer;
