import { combineReducers } from 'redux';
import { RECEIVE_PHOTOS } from '../../actions/photo_actions';
import { RECEIVE_USERS } from '../../actions/user_actions';

const usersSearchUiReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USERS:
      return Object.keys(action.users);
    default:
      return state;
  }
};

const photosSearchUiReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PHOTOS:
      debugger
      return Object.keys(action.photos);
    default:
      return state;
  }
};

export default combineReducers({
  users: usersSearchUiReducer,
  photos: photosSearchUiReducer,
});
