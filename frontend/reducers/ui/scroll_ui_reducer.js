import { combineReducers } from 'redux';
import {
  FETCH_PHOTO_FEED_PAGE,
  RECEIVE_PHOTO_FEED,
} from '../../actions/photo_actions';

const initialState = {
  isFetchingNextPage: false,
  hasNextPage: false,
};

const feedScrollUiReducer = (state = initialState, action) => {
  Object.freeze(state);

  let newState = Object.assign({}, state);
  switch (action.type) {
    case FETCH_PHOTO_FEED_PAGE:
      newState.isFetchingNextPage = true;
      return newState;
    case RECEIVE_PHOTO_FEED:
      newState.isFetchingNextPage = false;
      newState.hasNextPage =
        action.feedData.photos &&
        Boolean(Object.keys(action.feedData.photos)) &&
        !action.feedData.is_last_page;
      return newState;
    default:
      return state;
  }
};

export default combineReducers({
  feed: feedScrollUiReducer,
});
