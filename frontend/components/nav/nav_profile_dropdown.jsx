import React from 'react';

// TODO: Clicking the main <li> also links to the user profile

const NavProfileDropdown = ({ logOut, currentUser }) => (
  <li className="nav-dropdown-menu">
    <img
      src={currentUser.profile_photo_url}
      className="nav-dropdown-menu-profile-icon"
    />
    <ul className="nav-dropdown-submenu">
      <li>
        <a onClick={logOut}>Log out</a>
      </li>
    </ul>
  </li>
);

export default NavProfileDropdown;
