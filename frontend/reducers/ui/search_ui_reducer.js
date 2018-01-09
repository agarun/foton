import { combineReducers } from 'redux';
import { RECEIVE_PHOTOS } from '../../actions/photo_actions';
import { RECEIVE_USERS } from '../../actions/user_actions';

const usersSearchUiReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USERS:
      return action.users ? Object.keys(action.users) : state;
    default:
      return state;
  }
};

const photosSearchUiReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PHOTOS:
      return action.photos ? Object.keys(action.photos) : state;
    default:
      return state;
  }
};

export default combineReducers({
  users: usersSearchUiReducer,
  photos: photosSearchUiReducer,
});
