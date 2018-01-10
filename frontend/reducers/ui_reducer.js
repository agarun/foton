import { combineReducers } from 'redux';
import uploadUiReducer from './ui/upload_ui_reducer';
import modalUiReducer from './ui/modal_ui_reducer';
import scrollUiReducer from './ui/scroll_ui_reducer';
import searchUiReducer from './ui/search_ui_reducer';
import discoverUiReducer from './ui/discover_ui_reducer';

const uiReducer = combineReducers({
  upload: uploadUiReducer,
  modal: modalUiReducer,
  scroll: scrollUiReducer,
  search: searchUiReducer,
  discover: discoverUiReducer,
});

export default uiReducer;
