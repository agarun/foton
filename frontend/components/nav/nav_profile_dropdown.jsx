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
        <li className="nav-dropdown-submenu-username">
          <Link to={`/${currentUser.username}`}>
            {currentUser.username}
          </Link>
        </li>
      <li>
        <a onClick={logOut}>Log out</a>
      </li>
    </ul>
  </li>
);

export default NavProfileDropdown;
