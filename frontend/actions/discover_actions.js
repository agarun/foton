import * as DiscoverApiUtil from '../util/discover_api_util';
import { receivePhotos } from './photo_actions';
import { receiveUsers } from './user_actions';

export const RECEIVE_TAG_PHOTO_IDS = 'RECEIVE_TAG_PHOTO_IDS';

export const receiveTagPhotoIds = taggedPhotoIds => ({
  type: RECEIVE_TAG_PHOTO_IDS,
  taggedPhotoIds,
});

export const fetchRecommended = () => dispatch => (
  DiscoverApiUtil
    .fetchRecommended()
    .then(payload => {
      dispatch(receivePhotos(payload.photos));
      dispatch(receiveUsers(payload.users));
      dispatch(receiveTagPhotoIds(payload.tags));
    })
);

export const fetchEditorsChoicePhotos = () => dispatch => (
  DiscoverApiUtil
    .fetchEditorsChoicePhotos()
    .then(payload => dispatch(receivePhotos(payload.photos)))
);
