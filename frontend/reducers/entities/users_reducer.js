import {
  RECEIVE_USER,
  RECEIVE_USERS,
  RECEIVE_FOLLOW,
  RECEIVE_UNFOLLOW
} from '../../actions/user_actions';

import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';

import merge from 'lodash/merge'; // deep merge!

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
    case RECEIVE_FOLLOW: {
      const {
        follower_id, followed_id
      } = action.followData;

      newState[followed_id].follower_ids.push(follower_id);
      newState[followed_id].current_user_follows = true;

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
      newState[followed_id].current_user_follows = false;

      // current user is *not* in not in this slice of state
      // if this route was accessed via a permalink
      if (newState[follower_id]) {
        const followedIdx =
          newState[follower_id].following_ids.indexOf(followed_id);
        newState[follower_id].following_ids.splice(followedIdx, 1);
      }

      return newState;
    default:
      return state;
  }
};

export default usersReducer;
