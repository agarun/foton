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
    const pageNotFound = this.state.pageNotFound;
    if (pageNotFound) return <PageNotFound />;

    const { user, currentUser, followUser, unfollowUser } = this.props;
    return (
      <section className="main">
        {/* dev placeholders */}
        {user.username} <br />
        {user.bio} <br />
        {user.location} <br />

        {
          Object.keys(user).length !== 0 && (
            currentUser && currentUser.id === user.id ?
              'Edit Profile Button Here' :
              <FollowButton
                user={user}
                followUser={followUser}
                unfollowUser={unfollowUser}
              />
          )
        }
      </section>
    );
  }

}

export default UserProfile;
