import {
  RECEIVE_USER,
  RECEIVE_USERS,
  RECEIVE_FOLLOW,
  RECEIVE_UNFOLLOW,
} from '../../actions/user_actions';

import {
  RECEIVE_CURRENT_USER,
} from '../../actions/session_actions';

import {
  RECEIVE_PHOTO,
  REMOVE_PHOTO,
  RECEIVE_PHOTO_FEED,
} from '../../actions/photo_actions';

import merge from 'lodash/merge';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_USER: {
      const newUserId = action.user.id;
      const newUser = { [newUserId]: action.user };
      return Object.assign({}, state, newUser);
    }
    case RECEIVE_CURRENT_USER:
      if (action.currentUser) {
        const currentUserId = action.currentUser.id;
        const currentUser = { [currentUserId]: action.currentUser };
        return Object.assign({}, state, currentUser);
      }
      return state;
    case RECEIVE_USERS:
      return Object.assign({}, state, action.users);
    case RECEIVE_PHOTO:
      const authorId = action.photo.author_id;
      if (
        newState[authorId] &&
        newState[authorId].photo_ids.indexOf(action.photo.id) === -1
      ) {
        newState[action.photo.author_id].photo_ids.unshift(action.photo.id);
      }
      return newState;
    case RECEIVE_PHOTO_FEED:
      return Object.assign({}, state, action.feedData.users);
    case RECEIVE_FOLLOW: {
      const {
        follower_id, followed_id
      } = action.followData;

      newState[followed_id].follower_ids.push(follower_id);

      // current user is *not* in not in this slice of state
      // if this route was accessed via a permalink
      if (newState[follower_id])
        newState[follower_id].following_ids.push(followed_id);

      return newState;
    }
    case RECEIVE_UNFOLLOW:
      const {
        followed_id, follower_id
      } = action.followData;

      const followerIdx =
        newState[followed_id].follower_ids.indexOf(follower_id);
      newState[followed_id].follower_ids.splice(followerIdx, 1);

      // current user is *not* in not in this slice of state
      // if this route was accessed via a permalink
      if (newState[follower_id]) {
        const followedIdx =
          newState[follower_id].following_ids.indexOf(followed_id);
        newState[follower_id].following_ids.splice(followedIdx, 1);
      }

      return newState;
    case REMOVE_PHOTO:
      const photoIdx =
        newState[action.photo.author_id].photo_ids.indexOf(action.photo.id);
      newState[action.photo.author_id].photo_ids.splice(photoIdx, 1);
      return newState;
    default:
      return state;
  }
};

export default usersReducer;
