import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

const LogInLink = <li><Link className="login" to="/login">Log in</Link></li>;
const SignUpLink = <li><Link className="signup" to="/signup">Sign up</Link></li>;

const NavSession = () => (
  <ul>
    <Switch>
      <Route exact path="/login" component={() => SignUpLink} />
      <Route exact path="/signup" render={() => LogInLink} />
      <Route path="/" render={() => (
        <ul>
          {LogInLink}
          {SignUpLink}
        </ul>
      )} />
    </Switch>
  </ul>
);

export default NavSession;
