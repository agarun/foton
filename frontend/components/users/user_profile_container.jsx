import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { selectUserByUsername } from '../../selectors/selectors';
import {
  fetchUser,
  followUser,
  unfollowUser
} from '../../actions/user_actions';

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
  followUser: user => dispatch(followUser(user)),
  unfollowUser: user => dispatch(unfollowUser(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
