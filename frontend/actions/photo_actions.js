import * as PhotoApiUtil from '../util/photo_api_util';

export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const RECEIVE_UPLOAD_ERRORS = 'RECEIVE_UPLOAD_ERRORS';

export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
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
