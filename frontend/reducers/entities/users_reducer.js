import {
  RECEIVE_USER,
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
      const newUserUsername = action.user.username;
      const newUser = { [newUserUsername]: action.user };
      return Object.assign({}, state, newUser);
    }
    case RECEIVE_CURRENT_USER:
      if (action.currentUser) {
        const currentUserUsername = action.currentUser.username;
        const currentUser = { [currentUserUsername]: action.currentUser };
        return Object.assign({}, state, currentUser);
      }
      break;
    case RECEIVE_FOLLOW: {
      const {
        follower_username, followed_username, follower_id, followed_id
      } = action.followData;

      newState[followed_username].follower_ids.push(follower_id);
      newState[followed_username].current_user_follows = true;
      newState[follower_username].following_ids.push(followed_id);
      return newState;
    }
    case RECEIVE_UNFOLLOW:
      const {
        followed_username, follower_username, follower_id, followed_id
      } = action.followData;
      const followerIdx =
        newState[followed_username].follower_ids.indexOf(follower_id);
      const followedIdx =
        newState[follower_username].following_ids.indexOf(followed_id);

      newState[followed_username].follower_ids.splice(followerIdx, 1);
      newState[followed_username].current_user_follows = false;
      newState[follower_username].following_ids.splice(followedIdx, 1);
      return newState;
    default:
      return state;
  }
};

export default usersReducer;
