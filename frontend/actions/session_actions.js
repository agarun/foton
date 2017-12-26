import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signUp = newUser => dispatch => (
  SessionAPIUtil
    .signUp(newUser)
    .then(payloadWithUser => (
      dispatch(receiveCurrentUser(payloadWithUser))
    ), (error) => (
      dispatch(receiveSessionErrors(error.responseJSON))
    ))
);

export const logIn = user => dispatch => (
  SessionAPIUtil
    .logIn(user)
    .then(payloadWithUser => (
      dispatch(receiveCurrentUser(payloadWithUser))
    ), (error) => (
      dispatch(receiveSessionErrors(error.responseJSON))
    ))
);

export const logOut = () => dispatch => (
  SessionAPIUtil
    .logOut()
    .then(payload => (
      dispatch(receiveCurrentUser(null))
    ))
);
