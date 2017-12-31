import React, { Component } from 'react';
import PageNotFound from '../pages/404';

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

    const user = this.props.user;
    return (
      <section className="main">
        {user.username}
        {user.bio}
        {user.location}
      </section>
    );
  }

}

export default UserProfile;
