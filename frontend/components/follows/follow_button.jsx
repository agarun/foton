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
}) => (
  !currentUser || currentUser.id !== user.id ? (
    user.current_user_follows ? (
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
              closeFollowsModal();
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
