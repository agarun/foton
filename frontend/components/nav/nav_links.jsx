import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => (
  <ul>
    <li><Link to="/discover">Discover</Link></li>
    <li><Link to="/about">About</Link></li>
  </ul>
);

export default NavLinks;
