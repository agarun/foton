import { combineReducers } from 'redux';
import sessionErrorsReducer from './errors/session_errors_reducer';
import uploadErrorsReducer from './errors/upload_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  upload: uploadErrorsReducer,
});

export default errorsReducer;
