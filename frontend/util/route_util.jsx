import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({ component: Component, path, isLoggedIn }) => (
  <Route
    path={path}
    render={props => (
      isLoggedIn ? (
        <Redirect to="/" />
      ) : (
        <Component {...props} />
      )
    )}
  />
);

const Protected = ({ component: Component, path, isLoggedIn }) => (
  <Route
    path={path}
    render={props => (
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    )}
  />
);

const mapStateToProps = state => ({
  isLoggedIn: !!state.session.currentUser
});

export const AuthRoute = withRouter(
  connect(
    mapStateToProps
  )(Auth)
);

export const ProtectedRoute = withRouter(
  connect(
    mapStateToProps
  )(Protected)
);
