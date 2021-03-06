import {
  RECEIVE_PHOTO,
  RECEIVE_PHOTOS,
  REMOVE_PHOTO,
  FETCH_PHOTO_FEED_PAGE,
  RECEIVE_PHOTO_FEED,
  RECEIVE_LIKE,
  RECEIVE_UNLIKE,
} from '../../actions/photo_actions';

import {
  RECEIVE_CURRENT_USER,
} from '../../actions/session_actions';

import {
  RECEIVE_USER,
} from '../../actions/user_actions';

import merge from 'lodash/merge';

const photosReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PHOTOS:
      return Object.assign({}, state, action.photos);
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
      return Object.assign({}, state, action.user.photos);
    case RECEIVE_CURRENT_USER:
      return action.currentUser === null ? state : {};
    case FETCH_PHOTO_FEED_PAGE:
      return action.index === 1 ? {} : state;
    case RECEIVE_PHOTO_FEED: {
      const nextFeed = Object.assign({}, state, action.feedData.photos);
      return nextFeed;
    }
    case RECEIVE_LIKE: {
      const newState = merge({}, state);
      const { liker_id, photo_id } = action.likeData;
      newState[photo_id].liker_ids.push(liker_id);
      return newState;
    }
    case RECEIVE_UNLIKE: {
      const newState = merge({}, state);
      const { liker_id, photo_id } = action.likeData;
      const likerIdx = newState[photo_id].liker_ids.indexOf(liker_id);
      newState[photo_id].liker_ids.splice(likerIdx, 1);
      return newState;
    }
    default:
      return state;
  }
};

export default photosReducer;
