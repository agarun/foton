import * as PhotoApiUtil from '../util/photo_api_util';

export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const RECEIVE_UNLIKE = 'RECEIVE_UNLIKE';

export const FETCH_PHOTO_FEED_PAGE = 'FETCH_PHOTO_FEED_PAGE';
export const RECEIVE_PHOTO_FEED = 'RECEIVE_PHOTO_FEED';

export const RECEIVE_UPLOAD_ERRORS = 'RECEIVE_UPLOAD_ERRORS';

export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});

export const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos,
});

export const removePhoto = photo => ({
  type: REMOVE_PHOTO,
  photo
});

export const fetchPhotoFeedPage = index => ({
  type: FETCH_PHOTO_FEED_PAGE,
  index,
});

export const receivePhotoFeed = feedData => ({
  type: RECEIVE_PHOTO_FEED,
  feedData
});

export const receiveUploadErrors = errors => ({
  type: RECEIVE_UPLOAD_ERRORS,
  errors
});

export const receiveLike = likeData => ({
  type: RECEIVE_LIKE,
  likeData
});

export const receiveUnlike = likeData => ({
  type: RECEIVE_UNLIKE,
  likeData
});

export const createPhoto = photoData => dispatch => (
  PhotoApiUtil
    .createPhoto(photoData)
    .then(newPhoto => (
      dispatch(receivePhoto(newPhoto))
    ), error => (
      dispatch(receiveUploadErrors(error.responseJSON))
    ))
);

export const fetchPhoto = photoId => dispatch => (
  PhotoApiUtil
    .fetchPhoto(photoId)
    .then(photo => dispatch(receivePhoto(photo)))
);

export const updatePhoto = photo => dispatch => (
  PhotoApiUtil
    .updatePhoto(photo)
    .then(updatedPhoto => dispatch(receivePhoto(updatedPhoto)))
);

export const deletePhoto = photoId => dispatch => (
  PhotoApiUtil
    .deletePhoto(photoId)
    .then(photo => dispatch(removePhoto(photo)))
);

export const fetchPhotoFeed = pageNumber => dispatch => {
  dispatch(fetchPhotoFeedPage(pageNumber));
  return (
    PhotoApiUtil
      .fetchPhotoFeed(pageNumber)
      .then(feedData => dispatch(receivePhotoFeed(feedData)))
  );
};

export const likePhoto = photoId => dispatch => (
  PhotoApiUtil
    .likePhoto(photoId)
    .then(payload => dispatch(receiveLike(payload)))
);

export const unlikePhoto = photoId => dispatch => (
  PhotoApiUtil
    .unlikePhoto(photoId)
    .then(payload => dispatch(receiveUnlike(payload)))
);
