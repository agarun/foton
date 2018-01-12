import { combineReducers } from 'redux';
import { RECEIVE_PHOTOS } from '../../actions/photo_actions';
import { RECEIVE_USERS } from '../../actions/user_actions';
import { RECEIVE_TAG_PHOTO_IDS } from '../../actions/discover_actions';
import merge from 'lodash/merge';

const initialState = {
  taggedPhotoIds: [], // { tagName: [ photoIds ] }
  userIds: [],
};

const discoverRecommendedReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_TAG_PHOTO_IDS:
      newState.taggedPhotoIds = action.taggedPhotoIds;
      return newState;
    case RECEIVE_USERS:
      newState.userIds = action.users
        ? Object.keys(action.users)
        : state;
      return newState;
    default:
      return state;
  }
};

const discoverEditorsChoiceUiReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PHOTOS:
      return action.photos ? Object.keys(action.photos) : state;
    default:
      return state;
  }
};

export default combineReducers({
  recommended: discoverRecommendedReducer,
  editorsChoice: discoverEditorsChoiceUiReducer,
});
