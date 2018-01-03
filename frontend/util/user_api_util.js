export const fetchUser = username => (
  $.ajax({
    method: 'GET',
    url: `api/users/${username}`
  })
);

export const followUser = userToFollow => (
  $.ajax({
    method: 'PATCH',
    url: `api/users/${userToFollow.id}/follow`,
  })
);

export const unfollowUser = userToUnfollow => (
  $.ajax({
    method: 'DELETE',
    url: `api/users/${userToUnfollow.id}/unfollow`
  })
);

export const fetchUserFollowers = user => (
  $.ajax({
    method: 'GET',
    url: `api/users/${user.id}/followers`,
  })
);

export const fetchUserFollowing = user => (
  $.ajax({
    method: 'GET',
    url: `api/users/${user.id}/following`,
  })
);
