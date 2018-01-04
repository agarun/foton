import React, { Component } from 'react';
import PhotoGallery from '../photos/photo_gallery';
import PageNotFound from '../pages/404';
import FollowButton from '../follows/follow_button';
import LocationSVG from '../svg/location';

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = { pageNotFound: false, isFetching: true, user: null };
    this.pageNotFound = this.pageNotFound.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.username)
      .then(
        payload => this.setState({
          user: payload.user, isFetching: false
        }), this.pageNotFound
      );
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.username !== nextProps.username) {
      this.setState({ pageNotFound: false, isFetching: true });
      this.props.fetchUser(nextProps.username)
        .then(
          payload => this.setState({
            user: payload.user, isFetching: false
          }), this.pageNotFound
        );
    }
  }

  pageNotFound() {
    this.setState({ pageNotFound: true });
  }

  render() {
    const {
      users,
      currentUser,
      followUser,
      unfollowUser,
      toggleFollowsModal,
    } = this.props;
    const {
      user,
      isFetching
    } = this.state;

    if (this.state.pageNotFound) return <PageNotFound />;
    if (!user || isFetching) return null;

    return (
      <section className="main">
        <section className="user-profile-top">
          <section className="user-profile-cover-photo">
            <img src={user.cover_photo_url} />
          </section>
          <section className="user-profile-buttons">
            {
              currentUser && currentUser.id === user.id ?
                <button>Edit Profile</button> :
                <FollowButton
                  user={this.props.users[user.id]}
                />
            }
          </section>
          <section className="user-profile-photo">
            <img src={user.profile_photo_url} />
          </section>
          <section className="user-profile-info">
            <ul className="user-profile-header">
              <li><h1>{user.username}</h1></li>
              <li><p>{user.bio}</p></li>
            </ul>
            <ul className="user-profile-stats">
              <li
                className="user-profile-stats-follows"
                onClick={() => toggleFollowsModal(user, 'FOLLOWERS')}
              >
                <strong>{user.follower_ids.length}</strong>&nbsp;Followers
              </li>
              <li
                className="user-profile-stats-follows"
                onClick={() => toggleFollowsModal(user, 'FOLLOWING')}
              >
                <strong>{user.following_ids.length}</strong>&nbsp;Following
              </li>
              <li className="user-profile-stats-location">
                <LocationSVG />{user.location}
              </li>
            </ul>
          </section>
        </section>
        <section className="user-profile-gallery">
          <PhotoGallery
            photoIds={user.photo_ids}
          />
        </section>
      </section>
    );
  }

}

export default UserProfile;
