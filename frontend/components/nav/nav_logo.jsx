import React from 'react';
import LogoSVG from '../svg/logo';
import { Link } from 'react-router-dom';

const NavLogo = () => (
  <section className="nav-logo">
    <Link to="/">
      <LogoSVG />
    </Link>
  </section>
);

export default NavLogo;
