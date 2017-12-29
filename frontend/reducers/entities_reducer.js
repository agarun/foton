import { combineReducers } from 'redux';
import photosReducer from './entities/photos_reducer';

const errorsReducer = combineReducers({
  photos: photosReducer,
});

export default errorsReducer;
