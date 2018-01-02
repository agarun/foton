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
    const { user, currentUser, followUser, unfollowUser } = this.props;

    if (this.state.pageNotFound) return <PageNotFound />;
    if (Object.keys(user).length === 0) return null;

    return (
      <section className="main">
        <div>{user.username}</div>
        <div>{user.bio}</div>

        {
          currentUser && currentUser.id === user.id ?
            'Edit Profile Button Here' :
            <FollowButton
              user={user}
              followUser={followUser}
              unfollowUser={unfollowUser}
            />
        }

        <div>
          {user.follower_ids.length}&nbsp;Followers
        </div>
        <div>
          {user.following_ids.length}&nbsp;Following
        </div>
        <div>{user.location}</div>
      </section>
    );
  }

}

export default UserProfile;
