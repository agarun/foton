import React from 'react';
import { connect } from 'react-redux';
import PhotoGallery from '../photos/photo_gallery';
import SearchNotFound from './search_not_found';

const SearchResultsPhotos = ({ photoIds }) => (
  <section className="search-photos-results">
    {
      photoIds.length
        ? <PhotoGallery photoIds={photoIds} />
        : <SearchNotFound searchType={"photos"} />
    }
  </section>
);

const mapStateToProps = state => ({
  photoIds: state.ui.search.photos,
});

export default connect(mapStateToProps)(SearchResultsPhotos);
