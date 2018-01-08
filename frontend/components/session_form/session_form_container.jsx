import { connect } from 'react-redux';
import { logIn, signUp } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  const formType = ownProps.match.params.formType;
  const errors = state.errors.session;
  return {
    formType,
    errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const processForm =
    ownProps.match.params.formType === 'login'
      ? logIn
      : signUp;
  return {
    processForm: user => dispatch(processForm(user)),
    clearErrors: () => dispatch(clearErrors()),
    demoLogIn: user => dispatch(logIn(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
