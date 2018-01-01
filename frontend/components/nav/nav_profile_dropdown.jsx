import React from 'react';
import { Link } from 'react-router-dom';

const NavProfileDropdown = ({ logOut, currentUser }) => (
  <li className="nav-dropdown-menu">
    <Link to={`/${currentUser.username}`}>
      <img
        src={currentUser.profile_photo_url}
        className="nav-dropdown-menu-profile-icon"
      />
    </Link>
    <ul className="nav-dropdown-submenu">
      <Link to={`/${currentUser.username}`}>
        <li className="nav-dropdown-submenu-username">
            {currentUser.username}
        </li>
      </Link>
      <li>
        <a onClick={logOut}>Log out</a>
      </li>
    </ul>
  </li>
);

export default NavProfileDropdown;
