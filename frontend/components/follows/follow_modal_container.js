import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleModal } from '../../actions/ui_actions';
import { getUserFollowers, getUserFollowing } from '../../actions/user_actions';
import FollowModal from './follow_modal';

const mapStateToProps = (state, ownProps) => {
  const userIds = ownProps.requestType === 'FOLLOWING' ?
      ownProps.user.following_ids :
      ownProps.user.follower_ids;

  return {
    showModal: state.ui.modal.showModal,
    users: state.entities.users,
    userIds
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const processRequest =
    ownProps.requestType === 'FOLLOWING' ? getUserFollowing : getUserFollowers;

  return {
    toggleFollowsModal: user => dispatch(toggleModal('FOLLOWS', { user })),
    processRequest: user => dispatch(processRequest(user)),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(FollowModal)
);
