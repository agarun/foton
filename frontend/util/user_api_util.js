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
