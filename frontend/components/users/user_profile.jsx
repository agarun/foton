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
      currentUser, followUser, unfollowUser, toggleFollowsModal
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

          {
            currentUser && currentUser.id === user.id ?
              'Edit Profile Button Here' :
              <FollowButton user={user} />
          }

        <ul className="user-profile-stats">
          <li
            onClick={() => toggleFollowsModal(user, 'FOLLOWERS')}
          >
            {user.follower_ids.length}&nbsp;Followers
          </li>
          <li
            onClick={() => toggleFollowsModal(user, 'FOLLOWING')}
          >
            {user.following_ids.length}&nbsp;Following
          </li>
          <li>
            {user.location}
          </li>
        </ul>
      </section>
    );
  }

}

export default UserProfile;
