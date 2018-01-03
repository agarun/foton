export const createPhoto = formData => (
  $.ajax({
    method: 'POST',
    url: 'api/photos',
    contentType: false,
    processData: false,
    data: formData,
  })
);

export const fetchPhotoFeed = () => (
  $.ajax({
    method: 'GET',
    url: 'api/photos',
  })
);
