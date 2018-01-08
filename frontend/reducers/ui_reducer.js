import { combineReducers } from 'redux';
import uploadUiReducer from './ui/upload_ui_reducer';
import modalUiReducer from './ui/modal_ui_reducer';
import scrollUiReducer from './ui/scroll_ui_reducer';

const uiReducer = combineReducers({
  upload: uploadUiReducer,
  modal: modalUiReducer,
  scroll: scrollUiReducer,
});

export default uiReducer;
