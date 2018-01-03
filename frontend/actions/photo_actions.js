import * as PhotoApiUtil from '../util/photo_api_util';

export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const RECEIVE_PHOTO_FEED = 'RECEIVE_PHOTO_FEED';
export const RECEIVE_UPLOAD_ERRORS = 'RECEIVE_UPLOAD_ERRORS';

export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
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

export const fetchPhotoFeed = () => dispatch => (
  PhotoApiUtil
    .fetchPhotoFeed()
    .then(feedData => dispatch(receivePhotoFeed(feedData)))
);
