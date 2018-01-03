import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { selectUserByUsername } from '../../selectors/selectors';
import { fetchUser } from '../../actions/user_actions';
import { toggleModal } from '../../actions/ui_actions';

const mapStateToProps = (state, { match }) => {
  const username = match.params.username;
  const user = selectUserByUsername(state, username);
  const currentUser = state.session.currentUser;

  return {
    username,
    user,
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
