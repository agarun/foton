import React from 'react';
import SearchSVG from '../svg/search';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="search-bar">
        <form>
          <input
            className="search-bar-input"
            type="text"
            placeholder="Search Foton for photos or users"
          />
          <button className="search-bar-icon">
            <SearchSVG />
          </button>
          <section className="search-bar-type">
            {/* TODO: Type, Photos or Users */}
          </section>
        </form>
      </section>
    );
  }
}

export default SearchBar;
