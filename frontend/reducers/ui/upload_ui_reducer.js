import { TOGGLE_MODAL } from '../../actions/ui_actions';

const initialState = {
  showModal: false
};

const uploadUiReducer = (state = initialState, action) => {
  Object.freeze(state);

  let newState = Object.assign({}, state);
  switch (action.type) {
    case TOGGLE_MODAL:
      if (action.currentModal === 'upload') {
        newState.showModal = !state.showModal;
      }
      return newState;
    default:
      return state;
  }
};

export default uploadUiReducer;
