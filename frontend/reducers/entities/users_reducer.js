import {
  RECEIVE_USER
} from '../../actions/user_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USER: {
      const newUserUsername = action.user.username;
      const newUser = { [newUserUsername]: action.user };
      return Object.assign({}, state, newUser);
    }
    default:
      return state;
  }
};

export default usersReducer;
