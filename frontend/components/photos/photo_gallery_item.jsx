import React from 'react';
import { Link } from 'react-router-dom';

// CSS/JS gallery implementation referencing `paperclip-meta`, xieranmaya's
// article @ https://github.com/xieranmaya/blog/issues/6, and Masonry lib.
const PhotoGalleryItem = ({ photo }) => (
  <section
    className="photo-gallery-item" style={{
      width: `${photo.width * 360 / photo.height}px`,
      flexGrow: `${photo.width * 360 / photo.height}`
  }}>
    <i style={{
        'paddingBottom': `${photo.height / photo.width * 100}%`
    }}></i>
    <Link to={{
      pathname: `/photos/${photo.id}`,
      state: { isModal: true, photoId: photo.id },
    }}>
      <img src={photo.image_url} />
    </Link>
    <div className="photo-gallery-item-info">
      <div className="photo-gallery-item-info-wrapper">
        <div className="photo-gallery-item-info-title">
          {photo.title}
        </div>
      </div>
    </div>
  </section>
);

export default PhotoGalleryItem;
