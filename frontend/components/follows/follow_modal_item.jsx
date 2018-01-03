import React from 'react';
import FollowButton from './follow_button';
import { Link } from 'react-router-dom';

const FollowModalItem = ({ user }) => (
  user ?
    <li>
      <Link to={user.username}>
        <img
          className="follow-modal-users-profile-photo"
          src={user.profile_photo_url}
        />
      </Link>

      <section className="follow-modal-users-mid">
        <Link className="follow-modal-users-name" to={user.username}>
          <strong>{user.username}</strong>
        </Link>
        <section className="follow-modal-users-follower-count">
          {user.follower_ids.length} followers
        </section>
      </section>

      <FollowButton user={user} />
    </li> :
    null
);

export default FollowModalItem;
