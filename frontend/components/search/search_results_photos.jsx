import React from 'react';
import { connect } from 'react-redux';
import PhotoGallery from '../photos/photo_gallery';
import SearchSVG from '../svg/search';

const SearchResultsPhotos = ({ photoIds }) => (
  <section className="search-photos-results">
    {
      photoIds.length
        ? <PhotoGallery photoIds={photoIds} />
        : <section className="search-photos-results-not-found">
            <SearchSVG />
            No photos match the search terms
          </section>
    }
  </section>
);

const mapStateToProps = state => ({
  photoIds: state.ui.search.photos,
});

export default connect(mapStateToProps)(SearchResultsPhotos);
