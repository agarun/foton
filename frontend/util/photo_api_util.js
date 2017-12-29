export const createPhoto = photo => (
  $.ajax({
    method: 'POST',
    url: 'api/photos',
    contentType: false,
    processData: false,
    data: {
      photo
    },
  })
);
