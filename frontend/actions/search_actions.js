import * as SearchApiUtil from '../util/search_api_util';
import { receivePhotos } from './photo_actions';
import { receiveUsers } from './user_actions';

export const search = (searchText, searchType) => dispatch => (
  SearchApiUtil
    .search(searchText, searchType)
    .then(results => {
      const processResults =
        searchType === "photos" ? receivePhotos : receiveUsers;
      return dispatch(processResults(results[searchType]));
    })
);
