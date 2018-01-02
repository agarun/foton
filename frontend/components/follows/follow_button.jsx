import React from 'react'
import PropTypes from 'prop-types'

// TODO: Protected buttons (navigate to /login if clicked without currentUser)

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

export default FollowButton;
