export const search = (searchText, type) => (
  $.ajax({
    method: 'GET',
    url: 'api/search',
    data: {
      query: searchText,
      type
    }
  })
);
