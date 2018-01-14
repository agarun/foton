import { connect } from 'react-redux';
import { toggleModal } from '../../actions/ui_actions';
import { fetchUserFollowers, fetchUserFollowing }
  from '../../actions/user_actions';
import FollowModal from './follow_modal';

const mapStateToProps = (state, { currentModalProps }) => {
  const userIds =
    currentModalProps.requestType === 'FOLLOWING'
      ? currentModalProps.user.following_ids
      : currentModalProps.user.follower_ids;

  return {
    showModal: state.ui.modal.showModal,
    users: state.entities.users,
    userIds
  };
};

const mapDispatchToProps = (dispatch, { currentModalProps }) => {
  const processRequest =
    currentModalProps.requestType === 'FOLLOWING'
      ? fetchUserFollowing
      : fetchUserFollowers;

  return {
    toggleFollowsModal: user => dispatch(toggleModal('FOLLOWS', { user })),
    processRequest: user => dispatch(processRequest(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowModal);
