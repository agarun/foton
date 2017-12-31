export const selectUserByUsername = (state, username) => (
  state.entities.users[username] || {}
);
