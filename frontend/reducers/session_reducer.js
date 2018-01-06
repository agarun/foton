import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const sessionReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return { currentUser };
    case RECEIVE_USER:
      const fetchedUser = action.user;
      if (
        state.currentUser && fetchedUser.id === state.currentUser.id
      ) {
        return { currentUser: fetchedUser };
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default sessionReducer;
