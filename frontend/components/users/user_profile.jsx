import React from 'react';
import { Link } from 'react-router-dom';
import PhotoGallery from '../photos/photo_gallery';
import PageNotFound from '../pages/404';
import FollowButton from '../follows/follow_button';
import LocationSVG from '../svg/location';

class UserProfile extends React.Component {
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
    } else if (this.state.user) {
      const user = nextProps.users[this.state.user.id];
      this.setState({ user });
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

    const profileUser = this.props.users[this.state.user.id];
    return (
      <section className="main">
        <section className="user-profile-top">
          <section className="user-profile-cover-photo">
            <img src={profileUser.cover_photo_large_url} />
          </section>
          <section className="user-profile-buttons">
            {
              currentUser && currentUser.id === user.id ?
                <section>
                  <Link to="/manage">
                    <button className="user-profile-manage-button">
                      Manage Photos
                    </button>
                  </Link>
                  <button
                    className="user-profile-edit-button"
                    onClick={this.props.toggleUserProfileEditModal}
                  >
                    Edit Profile
                  </button>
                </section> :
                <FollowButton
                  user={profileUser}
                />
            }
          </section>
          <section className="user-profile-photo">
            <img src={profileUser.profile_photo_url} />
          </section>
          <section className="user-profile-info">
            <ul className="user-profile-header">
              <li><h1>{profileUser.username}</h1></li>
              <li><p>{profileUser.bio}</p></li>
            </ul>
            <ul className="user-profile-stats">
              <li
                className="user-profile-stats-follows"
                onClick={() => toggleFollowsModal(profileUser, 'FOLLOWERS')}
              >
                <strong>{profileUser.follower_ids.length}</strong>
                &nbsp;Followers
              </li>
              <li
                className="user-profile-stats-follows"
                onClick={() => toggleFollowsModal(profileUser, 'FOLLOWING')}
              >
                <strong>{profileUser.following_ids.length}</strong>
                &nbsp;Following
              </li>
              {
                profileUser.location &&
                <li className="user-profile-stats-location">
                  <LocationSVG />
                  {profileUser.location}
                </li>
              }
            </ul>
          </section>
        </section>
        <section className="user-profile-gallery">
          <PhotoGallery
            photoIds={profileUser.photo_ids}
          />
        </section>
      </section>
    );
  }

}

export default UserProfile;
