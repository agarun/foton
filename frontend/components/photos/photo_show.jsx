import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import FollowButton from '../follows/follow_button';

class PhotoShow extends React.Component {
  componentDidMount() {
    if (!this.props.photo) {
      this.props.fetchPhoto(this.props.photoId)
      .then(payload => this.props.fetchUser(payload.photo.author_name));
    }
  }

  render() {
    if (!this.props.author) return null;
    const {
      photo, author, isModal, closeModal
    } = this.props;

    return (
      <section className={
        isModal ? undefined : 'main'
      }>
        <section className={
          isModal ? 'photo-show' : 'photo-show photo-show-smaller'
        }>
          <section className={
            isModal ?
            'photo-show-content photo-show-content-hover' : 'photo-show-content'
          }>
            <img
              onClick={() => ( closeModal ? closeModal() : null )}
              src={photo.image_url}
            />
          </section>
          <section className="photo-show-sidebar">
            <section className="photo-show-sidebar-author">
              <section className="photo-show-sidebar-author-avatar">
                <Link to={`/${author.username}`}>
                  <img src={author.profile_photo_url} />
                </Link>
              </section>
              <section className="photo-show-sidebar-author-info">
                <section className="photo-show-sidebar-author-info-username">
                  <Link to={`/${author.username}`}>
                    {author.username}
                  </Link>
                </section>
                <section className="photo-show-sidebar-author-info-button">
                  <FollowButton user={author} />
                </section>
              </section>
            </section>
            <section className="photo-show-sidebar-title">
              {photo.title}
            </section>
            {
              photo.description &&
                <section className="photo-show-sidebar-description">
                  {photo.description}
                  <small>Posted {photo.time_posted} ago.</small>
                </section>
            }
          </section>
        </section>
      </section>
    );
  }
}

export default withRouter(PhotoShow);
