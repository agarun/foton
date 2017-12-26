export const logIn = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session/',
    data: {
      user
    },
  })
);

export const logOut = userId => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`,
  })
);

export const signUp = user => (
  $.ajax({
    method: 'GET',
    url: `/api/users/`,
    data: {
      user
    },
  })
);
