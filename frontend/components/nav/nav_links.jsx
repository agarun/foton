import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => (
  <ul>
    <li>
      <NavLink to="/discover" activeClassName="nav-link-active">
        Discover
      </NavLink>
    </li>
    <li>
      <NavLink to="/about" activeClassName="nav-link-active">
        About
      </NavLink>
    </li>
  </ul>
);

export default NavLinks;
