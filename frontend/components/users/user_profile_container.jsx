import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { toggleModal } from '../../actions/ui_actions';
import UserProfile from './user_profile';

const mapStateToProps = (state, { match }) => {
  const username = match.params.username;
  const currentUser = state.session.currentUser;

  return {
    username,
    currentUser,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUser: username => dispatch(fetchUser(username)),
  toggleFollowsModal: (user, requestType) => (
    dispatch(toggleModal('FOLLOWS', { user, requestType }))
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
