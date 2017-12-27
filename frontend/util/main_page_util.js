import React from 'react';
import LandingPage from '../components/pages/landing_page';
// import PhotoFeedContainer from '';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

const Main = props => (
  props.isLoggedIn ? (
    '' // <PhotoFeedContainer {...props} />
  ) : (
    <LandingPage {...props} />
  )
);

const mapStateToProps = state => ({
  isLoggedIn: !!state.session.currentUser
});

export const MainPage = withRouter(
  connect(
    mapStateToProps
  )(Main)
);
