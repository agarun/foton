import React from 'react';
import { followUser, unfollowUser } from '../../actions/user_actions';
import { connect } from 'react-redux';

// TODO: Protected buttons (navigate to /login if clicked without currentUser)
 // i can just connect everything and not even give it user right ?

const FollowButton = ({ user, followUser, unfollowUser }) => (
  user.current_user_follows ?
    <button
      className="unfollow-button"
      onClick={() => unfollowUser(user)}
    ></button> :
    <button
      className="follow-button"
      onClick={() => followUser(user)}
    ></button>
);

const mapDispatchToProps = dispatch => ({
  followUser: user => dispatch(followUser(user)),
  unfollowUser: user => dispatch(unfollowUser(user)),
});

export default connect(null, mapDispatchToProps)(FollowButton);
