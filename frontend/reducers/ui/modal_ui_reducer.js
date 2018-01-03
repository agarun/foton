import { TOGGLE_MODAL } from '../../actions/ui_actions';
import { RECEIVE_PHOTO } from '../../actions/photo_actions';

const initialState = {
  showModal: false,
  currentModal: null,
  currentModalProps: null,
};

const modalUiReducer = (state = initialState, action) => {
  Object.freeze(state);

  let newState = Object.assign({}, state);
  switch (action.type) {
    case TOGGLE_MODAL:
      newState.showModal = !state.showModal;
      newState.currentModal = action.currentModal;
      newState.currentModalProps = action.currentModalProps;
      return newState;
    case RECEIVE_PHOTO:
      return initialState;
    default:
      return state;
  }
};

export default modalUiReducer;
