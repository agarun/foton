export const createPhoto = formData => (
  $.ajax({
    method: 'POST',
    url: 'api/photos',
    contentType: false,
    processData: false,
    data: formData,
  })
);

export const fetchPhoto = photoId => (
  $.ajax({
    method: 'GET',
    url: `api/photos/${photoId}`,
  })
);

export const updatePhoto = photo => (
  $.ajax({
    method: 'PATCH',
    url: `api/photos/${photo.id}`,
    data: {
      photo
    },
  })
);

export const deletePhoto = photoId => (
  $.ajax({
    method: 'DELETE',
    url: `api/photos/${photoId}`,
  })
);

export const fetchPhotoFeed = pageNumber => (
  $.ajax({
    method: 'GET',
    url: `api/photos?page=${pageNumber}`,
  })
);

export const likePhoto = photoId => (
  $.ajax({
    method: 'PATCH',
    url: `api/photos/${photoId}/like`,
  })
);

export const unlikePhoto = photoId => (
  $.ajax({
    method: 'DELETE',
    url: `api/photos/${photoId}/unlike`
  })
);
