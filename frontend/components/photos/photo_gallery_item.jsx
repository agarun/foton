import React from 'react';

const PhotoGalleryItem = ({ photo }) => (
  <section>
    <img src={photo.image_url} />
  </section>
);

export default PhotoGalleryItem;
