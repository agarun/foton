import React from 'react';
import SearchSVG from '../svg/search';

const SearchNotFound = ({ searchType }) => (
  <section className="search-results-not-found">
    <SearchSVG />
    {`No ${searchType} match the search terms`}
  </section>
);

export default SearchNotFound;
