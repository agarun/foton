import * as PhotoApiUtil from '../util/photo_api_util';

export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';
export const RECEIVE_PHOTO_FEED = 'RECEIVE_PHOTO_FEED';
export const RECEIVE_UPLOAD_ERRORS = 'RECEIVE_UPLOAD_ERRORS';

export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});

export const removePhoto = photo => ({
  type: REMOVE_PHOTO,
  photo
});

export const receivePhotoFeed = feedData => ({
  type: RECEIVE_PHOTO_FEED,
  feedData
});

export const receiveUploadErrors = errors => ({
  type: RECEIVE_UPLOAD_ERRORS,
  errors
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

export const fetchPhotoFeed = () => dispatch => (
  PhotoApiUtil
    .fetchPhotoFeed()
    .then(feedData => dispatch(receivePhotoFeed(feedData)))
);
