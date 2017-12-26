import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleChange(field) {
    return (e) => (
      this.setState({
        [field]: e.currentTarget.value
      })
    );
  }

  render() {
    const formType = this.props.formType;

    return (
      <section className="session-form">
        <form onSubmit={this.handleSubmit}>
          <h1>
            {
              (formType === 'login') ?
              'Log In to Foton' :
              'Join Foton'
            }
          </h1>
          <label>
            Username
            <input
              type="text"
              onChange={this.handleChange('username')}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              onChange={this.handleChange('password')}
            />
          </label>
          <input
            type="submit"
            value={formType === 'login' ? 'Log in' : 'Sign up'}
          />
        </form>
      </section>
    );
  }
}

export default SessionForm;
