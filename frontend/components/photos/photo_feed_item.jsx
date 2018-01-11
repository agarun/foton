import React from 'react';
import { Link } from 'react-router-dom';
import LikeButton from '../likes/like_button';

const PhotoFeedItem = ({ photo, author, measure }) => (
  <section className="photo-feed-item-container">
    <section className="photo-feed-item">
      <section className="photo-feed-item-header">
        <section className="photo-feed-item-header-author-avatar">
          <Link to={author.username}>
            <img src={author.profile_photo_url} />
          </Link>
        </section>
        <section className="photo-feed-item-header-author-info">
          <section className="photo-feed-item-header-author-info-username">
            <Link to={author.username}>
              {author.username}
            </Link>
          </section>
          <section className="photo-feed-item-header-author-info-time">
            {photo.time_posted}&nbsp;ago
          </section>
        </section>
      </section>
      <section className="photo-feed-item-image">
          <Link to={{
            pathname: `/photos/${photo.id}`,
            state: { isModal: true, photoId: photo.id },
          }}>
          <img src={photo.image_url} onLoad={measure} />
        </Link>
      </section>
      <section className="photo-feed-item-info">
        <div className="photo-feed-item-info-text">
          <h2>{photo.title}</h2>
          <h3>{photo.description}</h3>
        </div>
        <div className="photo-feed-item-info-interact">
          <LikeButton photo={photo} />
        </div>
      </section>
    </section>
  </section>
);

export default PhotoFeedItem;
