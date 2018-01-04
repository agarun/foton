import React, { Component } from 'react';
import PageNotFound from '../pages/404';
import FollowButton from '../follows/follow_button';

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = { pageNotFound: false, user: null };
    this.pageNotFound = this.pageNotFound.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.username)
      .then(
        payload => this.setState({ user: payload.user }), this.pageNotFound
      );
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.username !== nextProps.username) {
      this.setState({ pageNotFound: false });
      this.props.fetchUser(nextProps.username)
        .then(
          payload => this.setState({ user: payload.user }), this.pageNotFound
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
      user
    } = this.state;

    if (this.state.pageNotFound) return <PageNotFound />;
    if (!user) return null;

    return (
      <section className="main">
        <ul>
          <li>{user.username}</li>
          <li>{user.bio}</li>
        </ul>
        <section className="user-profile-cover-photo"></section>
        <section className="user-profile-header"></section>
        <section className="user-profile-buttons">
          {
            currentUser && currentUser.id === user.id ?
              'Edit Profile Button Here' :
              <FollowButton
                user={this.props.users[user.id]}
              />
          }
        </section>
        <section className="user-profile-info">
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
            <li>
              {user.location}
            </li>
          </ul>
        </section>
      </section>
    );
  }

}

export default UserProfile;
