import {
  RECEIVE_USER,
  RECEIVE_FOLLOW,
  RECEIVE_UNFOLLOW
} from '../../actions/user_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_USER: {
      const newUserUsername = action.user.username;
      const newUser = { [newUserUsername]: action.user };
      return Object.assign({}, state, newUser);
    }
    case RECEIVE_FOLLOW: {
      // debugger

      const {
        follower_username, followed_username, follower_id, followed_id
      } = action.followData;

      newState[followed_username].follower_ids.push(follower_id);
      // newState[follower_username].following_ids.push(followed_id);
      newState[followed_username].current_user_follows = true;

      return newState;
    }
    case RECEIVE_UNFOLLOW: {
      // debugger

      const {
        followed_username, follower_username, follower_id, followed_id
      } = action.followData;
      const followerIdx = newState[followed_username].follower_ids.indexOf(follower_id);
      // const followedIdx = newState[follower_username].followed_ids.indexOf(followed_id);

      newState[followed_username].follower_ids.splice(followerIdx, 1);
      // newState[follower_username].following_ids.splice(followedIdx, 1);
      newState[followed_username].current_user_follows = false;

      return newState;
    }
    default:
      return state;
  }
};

export default usersReducer;
