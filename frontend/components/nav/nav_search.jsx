import React from 'react';
import SearchSVG from '../svg/search';

const NavSearch = ({}) => (
  // TODO don't render on /search
  <li className="nav-search">
    <form className="nav-search-submit">
      <input
        type="text"
        name="search"
        autoComplete="off"
        // required
        placeholder="Search for photos and users"
      />
      <SearchSVG />
      {/* hidden input, default photos? */}
    </form>
  </li>
);

export default NavSearch;
