import React from 'react';
import SearchBar from './search_bar';

class Search extends React.Component {

  render() {
    return (
      <section className="main">
        <SearchBar />
        {/* <SearchResults /> */}
      </section>
    );
  }
}

export default Search;
