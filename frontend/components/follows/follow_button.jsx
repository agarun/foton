import React from 'react';
import { followUser, unfollowUser } from '../../actions/user_actions';
import { toggleModal } from '../../actions/ui_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const FollowButton = ({
  user,
  followUser,
  unfollowUser,
  closeFollowsModal,
  currentUser,
  history
}) => {
  if (currentUser) {
    return (
      currentUser.id !== user.id ? (
        user.current_user_follows ? (
          <button
            className="unfollow-button"
            onClick={() => unfollowUser(user)}
          ></button>
        ) : (
          <button
            className="follow-button"
            onClick={() => followUser(user)}
          ></button>
        )
      ) : (
        "That's you!"
      )
    );
  } else {
    return (
      <button
        className="follow-button"
        onClick={() => {
          history.push('/login');
          closeFollowsModal();
        }}
      ></button>
    );
  }
};

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
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
