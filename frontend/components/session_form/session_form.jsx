import React from 'react';
import { Link } from 'react-router-dom';
import SessionError from './session_error';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const newUser = Object.assign({}, this.state);
    this.props.processForm(newUser).then(() => {
      this.props.history.push('/');
    });
  }

  handleChange(field) {
    return (e) => {
      if (this.props.errors) this.props.clearErrors();
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  render() {
    const formType = this.props.formType;
    const errors = this.props.errors;

    return (
      <section className="session-form">
        {errors && <SessionError sessionErrors={errors} />}
        <form onSubmit={this.handleSubmit}>
          <h1>
            {formType === 'login' ? 'Log In to Foton' : 'Join Foton'}
          </h1>
          <label>
            Username
            <input
              className={
                errors && errors.username ?
                'input-block input-session input-invalid' :
                'input-block input-session'
              }
              type="text"
              autoComplete="username"
              onChange={this.handleChange('username')}
              autoFocus
            />
          </label>
          <label>
            Password
            <input
              className={
                errors && errors.password ?
                'input-block input-session input-invalid' :
                'input-block input-session'
              }
              type="password"
              autoComplete="off"
              onChange={this.handleChange('password')}
            />
          </label>
          <input
            type="submit"
            value={formType === 'login' ? 'Log in' : 'Sign up'}
          />
          <button>
            Guest Sign In
          </button>
          <p className="session-form-redirect">
            {
              (formType === 'login') ? [
                "Don't have an account yet? ",
                <Link key="login" to="/signup/">Sign up</Link>
              ] : [
                'Already have an account? ',
                <Link key="signup" to="/login/">Log in</Link>
              ]
            }
          </p>
        </form>
      </section>
    );
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.formType !== nextProps.formType) {
      this.props.clearErrors();
    }
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }
}

export default SessionForm;
