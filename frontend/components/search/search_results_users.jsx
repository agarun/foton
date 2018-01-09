import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FollowButton from '../follows/follow_button';

const SearchResultsUsersItem = ({ user }) => (
  <div className="search-users-results-item">
    <div className="search-users-results-item-cover">
      <img src="" />

    </div>
    <div className="search-users-results-item-profile-photo">
      <img src="" />
    </div>
    <div className="search-users-results-item-name">
      <Link to={`/${user.username}`}>{user.username}</Link>
    </div>
    <p>{user.follower_ids.length} Followers</p>
    <FollowButton user={user} />
  </div>
);

const SearchResultsUsers = ({ users, userIds }) => (
  <section className="search-users-results">
    {
      userIds.map(userId => (
        <SearchResultsUsersItem
          key={userId}
          user={users[userId]}
        />
      ))
    }
  </section>
);

const mapStateToProps = state => ({
  userIds: state.ui.search.users,
  users: state.entities.users,
});

export default connect(
  mapStateToProps
)(SearchResultsUsers);
