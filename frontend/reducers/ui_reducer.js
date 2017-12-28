import { combineReducers } from 'redux';
import uploadUiReducer from './ui/upload_ui_reducer';

const uiReducer = combineReducers({
  upload: uploadUiReducer,
});

export default uiReducer;
