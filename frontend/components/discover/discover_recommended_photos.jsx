import React from 'react';
import Carousel from 'nuka-carousel';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const hotfixCarousel = (target, type) => {
  const doc = window.document;
  if (doc.createEvent) {
    const event = doc.createEvent('HTMLEvents');
    event.initEvent(type, true, true);
    target.dispatchEvent(event);
  } else {
    const event = doc.createEventObject();
    target.fireEvent(`on${type}`, event);
  }
};

const DiscoverRecommendedPhotoRow = ({ tagName, photos, photoIds }) => (
  <section className="discover-recommended-photos">
    <div className="discover-recommended-tag">
      {
        tagName.charAt(0).toUpperCase() +
        tagName.slice(1).toLowerCase()
      }
    </div>
    <Carousel
      slidesToShow={4}
      framePadding="0 50px"
      decorators={Carousel.getDefaultProps().decorators.slice(0, 2)}
      cellSpacing={20}
    >
      {
        photoIds.map(photoId => (
          <div
            key={photoId} 
            className="discover-gallery-item"
            style={{
              maxWidth:
                `${photos[photoId].width * 220 / photos[photoId].height}px`
            }}
          >
            <Link to={{
              pathname: `/photos/${photoId}`,
              state: { isModal: true, photoId },
            }}>
              <img
                src={photos[photoId].image_url}
                onLoad={() => hotfixCarousel(window, 'resize')}
              />
            </Link>
            <div className="photo-gallery-item-info">
              <div className="photo-gallery-item-info-wrapper">
                <div className="photo-gallery-item-info-title">
                  {photos[photoId].title}
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </Carousel>
  </section>
);

const mapStateToProps = state => ({
  photos: state.entities.photos,
});

export default connect(
  mapStateToProps
)(DiscoverRecommendedPhotoRow);
