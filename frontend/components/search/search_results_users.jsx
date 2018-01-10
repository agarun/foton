import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FollowButton from '../follows/follow_button';
import SearchNotFound from './search_not_found';

const SearchResultsUsersItem = ({ user }) => (
  <section className="search-users-results-item">
    <div className="search-users-results-item-cover">
      <img src={user.cover_photo_url} />
    </div>
    <div className="search-users-results-item-profile-photo">
      <Link to={`/${user.username}`}>
        <img src={user.profile_photo_url} />
      </Link>
    </div>
    <div className="search-users-results-item-name">
      <Link to={`/${user.username}`}>{user.username}</Link>
    </div>
    <div className="search-users-results-item-follows">
      {user.follower_ids.length} Followers
    </div>
    <FollowButton user={user} />
  </section>
);

const SearchResultsUsers = ({ users, userIds }) => (
  userIds.length
    ?  <section className="search-users-results">
        {
          userIds.map(userId => (
            <SearchResultsUsersItem
              key={userId}
              user={users[userId]}
            />
          ))
        }
      </section>
    : <SearchNotFound searchType={"users"} />
);

const mapStateToProps = state => ({
  userIds: state.ui.search.users,
  users: state.entities.users,
});

export default connect(
  mapStateToProps
)(SearchResultsUsers);
