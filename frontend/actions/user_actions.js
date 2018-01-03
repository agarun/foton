import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const RECEIVE_UNFOLLOW = 'RECEIVE_UNFOLLOW';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

export const receiveFollow = followData => ({
  type: RECEIVE_FOLLOW,
  followData
});

export const receiveUnfollow = followData => ({
  type: RECEIVE_UNFOLLOW,
  followData
});

export const fetchUser = username => dispatch => (
  UserApiUtil
    .fetchUser(username)
    .then(user => dispatch(receiveUser(user)))
);

export const followUser = user => dispatch => (
  UserApiUtil
    .followUser(user)
    .then(payload => dispatch(receiveFollow(payload)))
);

export const unfollowUser = user => dispatch => (
  UserApiUtil
    .unfollowUser(user)
    .then(payload => dispatch(receiveUnfollow(payload)))
);

export const getUserFollowers = user => dispatch => (
  UserApiUtil
    .getUserFollowers(user)
    .then(followers => dispatch(receiveUsers(followers)))
);

export const getUserFollowing = user => dispatch => (
  UserApiUtil
    .getUserFollowing(user)
    .then(following => dispatch(receiveUsers(following)))
);
