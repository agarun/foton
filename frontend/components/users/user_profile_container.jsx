import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import UserProfile from './user_profile';
import { selectUserByUsername } from '../../selectors/selectors';

const mapStateToProps = (state, { match }) => {
  const username = match.params.username;
  const user = selectUserByUsername(state, username);

  return {
    username,
    user,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUser: username => dispatch(fetchUser(username)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
