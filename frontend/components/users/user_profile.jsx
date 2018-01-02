import React, { Component } from 'react';
import PageNotFound from '../pages/404';
import FollowButton from '../follows/follow_button';

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = { pageNotFound: false };
    this.pageNotFound = this.pageNotFound.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.username).then(null, this.pageNotFound);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.username !== nextProps.username) {
      this.setState({ pageNotFound: false });
      this.props.fetchUser(nextProps.username).then(null, this.pageNotFound);
    }
  }

  pageNotFound() {
    this.setState({ pageNotFound: true });
  }

  render() {
    const {
      user, currentUser, followUser, unfollowUser, toggleFollowsModal
    } = this.props;

    if (this.state.pageNotFound) return <PageNotFound />;
    if (Object.keys(user).length === 0) return null;

    return (
      <section className="main">
        <ul>
          <li>{user.username}</li>
          <li>{user.bio}</li>
        </ul>

          {
            currentUser && currentUser.id === user.id ?
              'Edit Profile Button Here' :
              <FollowButton
                user={user}
                followUser={followUser}
                unfollowUser={unfollowUser}
              />
          }

        <ul className="user-profile-stats">
          <li onClick={toggleFollowsModal(user.follower_ids)}>
            {user.follower_ids.length}&nbsp;Followers
          </li>
          <li onClick={toggleFollowsModal(user.follwing_ids)}>
            {user.following_ids.length}&nbsp;Following
          </li>
          <li>{user.location}</li>
        </ul>
      </section>
    );
  }

}

export default UserProfile;
