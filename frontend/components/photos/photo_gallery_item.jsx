import React from 'react';

// CSS/JS gallery implementation referencing `paperclip-meta`, xieranmaya's
// article @ https://github.com/xieranmaya/blog/issues/6, and Masonry lib.
const PhotoGalleryItem = ({ photo }) => {
  return (
    <section style={{
      width: `${photo.width * 200 / photo.height}px`,
      flexGrow: `${photo.width * 200 / photo.height}`
    }}>
      <i style={{
          'paddingBottom': `${photo.height / photo.width * 100}%`
      }}></i>
      <img src={photo.image_url} />
    </section>
  );
};

export default PhotoGalleryItem;
