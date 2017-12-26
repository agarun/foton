import { connect } from 'react-redux';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  const formType =
    (ownProps.location.pathname === '/login') ?
    'logIn' :
    'signUp';
  return { formType };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const processForm =
    (ownProps.location.pathname === '/login') ?
    'logInUser' :
    'createUser';
  return { processForm };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
