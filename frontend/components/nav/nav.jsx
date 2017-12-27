import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavLogo from './nav_logo';
import NavLinks from './nav_links';
import NavSession from './nav_session';
import NavContent from './nav_content';

const Nav = ({ isLoggedIn, path }) => {
  const navClassName =
    (!isLoggedIn && path === '/') ?
      'nav-transparent' :
      'nav-fixed';
  const NavType =
    !isLoggedIn ? NavSession : NavContent;

  return (
    <nav className={navClassName}>
      <section className="nav-wrapper">
        <NavLogo />
        <NavLinks />
        <NavType />
      </section>
    </nav>
  );
};

const mapStateToProps = (state, ownProps) => ({
  isLoggedIn: !!state.session.currentUser,
  path: ownProps.location.pathname,
});

const NavContainer = connect(
  mapStateToProps
)(Nav);

export default withRouter(NavContainer);
