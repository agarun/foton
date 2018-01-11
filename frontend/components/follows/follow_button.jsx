import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { followUser, unfollowUser } from '../../actions/user_actions';
import { toggleModal } from '../../actions/ui_actions';

const FollowButton = ({
  user,
  followUser,
  unfollowUser,
  closeFollowsModal,
  isCurrentUserFollowing,
  currentUser,
  history
}) => (
  !currentUser || currentUser.id !== user.id ? (
    isCurrentUserFollowing ? (
      <button
        className="unfollow-button"
        onClick={() => {
          unfollowUser(user)
            .then(null, () => {
              history.push('/login');
              closeFollowsModal();
            });
        }}
      ></button>
    ) : ( // render follow button if not logged in OR viewing an unfollowed user
      <button
        className="follow-button"
        onClick={() => {
          followUser(user)
            .then(null, () => {
              history.push('/login');
            });
        }}
      ></button>
    )
  ) : (
    <span className="follow-current-user">
      That's you!
    </span>
  )
);

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser;
  const isCurrentUserFollowing =
    currentUser ? ownProps.user.follower_ids.includes(currentUser.id) : false;

  return {
    currentUser,
    isCurrentUserFollowing
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  followUser: user => dispatch(followUser(user)),
  unfollowUser: user => dispatch(unfollowUser(user)),
  closeFollowsModal: () => dispatch(toggleModal(null)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(FollowButton)
);
