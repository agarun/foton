import { combineReducers } from 'redux';
import photosReducer from './entities/photos_reducer';
import usersReducer from './entities/users_reducer';

const entitiesReducer = combineReducers({
  photos: photosReducer,
  users: usersReducer, 
});

export default entitiesReducer;
