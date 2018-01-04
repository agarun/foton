import React from 'react';
import { Link } from 'react-router-dom';

const PhotoFeedItem = ({ photo, author }) => (
  <li className="photo-feed-item">
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
      <Link to={`/photos/${photo.id}`}>
        <img src={photo.image_url} />
      </Link>
    </section>
    <section className="photo-feed-item-info">
      <h2>{photo.title}</h2>
      <h3>{photo.description}</h3>
    </section>
  </li>
);

export default PhotoFeedItem;
