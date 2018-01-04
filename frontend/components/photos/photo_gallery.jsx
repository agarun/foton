import React from 'react';
import { connect } from 'react-redux';

const PhotoGallery = ({ photos, photoIds }) => (
  photoIds.map(photoId => (
    <PhotoGalleryItem photo={photos[photoId]} />
  ))
);

const mapStateToProps = state => ({
  photos: state.entities.photos,
});

export default connect(mapStateToProps)(PhotoGallery);
