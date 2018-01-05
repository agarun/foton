import { connect } from 'react-redux';
import { toggleModal } from '../../actions/ui_actions';
import { updateUser } from '../../actions/user_actions';
import UserProfileEdit from './user_profile_edit';

const mapStateToProps = (state, ownProps) => ({
  showModal: state.ui.modal.showModal,
  user: state.entities.users[state.session.currentUser.id],
  photos: state.entities.photos,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleUserProfileEditModal: () => (
    dispatch(toggleModal('PROFILE_EDIT'))
  ),
  updateUser: user => dispatch(updateUser(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileEdit);
