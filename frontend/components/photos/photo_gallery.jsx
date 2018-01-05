import React from 'react';
import { connect } from 'react-redux';
import PhotoGalleryItem from './photo_gallery_item';

const PhotoGallery = ({ photos, photoIds }) => (
  <section className="photo-gallery-items">
    {
      photoIds.reverse().map(photoId => (
        <PhotoGalleryItem
          key={photos[photoId].id}
          photo={photos[photoId]}
        />
      ))
    }
  </section>
);

const mapStateToProps = state => ({
  photos: state.entities.photos,
});

export default connect(
  mapStateToProps
)(PhotoGallery);
