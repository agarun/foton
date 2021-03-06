import React from 'react';
import { Link } from 'react-router-dom';
import FollowButton from '../follows/follow_button';
import LikeButton from '../likes/like_button';
import TagShow from '../tags/tag_show';
import PageNotFound from '../pages/404';

class PhotoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pageNotFound: false };
    this.pageNotFound = this.pageNotFound.bind(this);
  }

  pageNotFound() {
    this.setState({ pageNotFound: true });
  }

  componentDidMount() {
    if (!this.props.photo) {
      this.props.fetchPhoto(this.props.photoId)
        .then(
          payload => this.props.fetchUser(payload.photo.author_name),
          this.pageNotFound
        );
    } else if (!this.props.author) {
      this.props.fetchUser(this.props.photo.author_name);
    }
  }

  render() {
    if (this.state.pageNotFound) return <PageNotFound />;
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
            isModal
              ? 'photo-show-content photo-show-content-hover'
              : 'photo-show-content'
          } onClick={
            (e) => ( closeModal ? closeModal(e) : null )
          }>
            <img src={photo.original_image_url} />
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
            <section className="photo-show-sidebar-likes">
              <LikeButton photo={photo} />
            </section>
            {
              photo.title &&
                <section className="photo-show-sidebar-title">
                  {photo.title}
                </section>
            }
            <section className="photo-show-sidebar-description">
              {photo.description}
            </section>
            <section className="photo-show-sidebar-time">
              Posted {photo.time_posted} ago.
            </section>
            {
              photo.tags.length
                ? <section className="photo-show-sidebar-tags">
                    <small>Tags</small>
                    <TagShow tags={photo.tags} />
                  </section>
                : null
            }
          </section>
        </section>
      </section>
    );
  }
}

export default PhotoShow;
