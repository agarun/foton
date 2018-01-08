import {
  FETCH_PHOTO_FEED_PAGE,
  RECEIVE_PHOTO_FEED,
} from '../../actions/photo_actions';

import merge from 'lodash/merge';

const initialState = {
  feed: {
    isFetchingNextPage: false,
    hasNextPage: false,
  },
};

const modalUiReducer = (state = initialState, action) => {
  Object.freeze(state);

  let newState = merge({}, state);
  switch (action.type) {
    case FETCH_PHOTO_FEED_PAGE:
      newState.feed.isFetchingNextPage = true;
      return newState;
    case RECEIVE_PHOTO_FEED:
      newState.feed.isFetchingNextPage = false;
      newState.feed.hasNextPage =
        action.feedData.photos &&
        Boolean(Object.keys(action.feedData.photos)) &&
        !action.feedData.is_last_page;
      return newState;
    default:
      return state;
  }
};

export default modalUiReducer;
