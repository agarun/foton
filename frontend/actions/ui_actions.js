export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const REQUEST_UPLOAD = 'REQUEST_UPLOAD';

export const toggleModal = currentModal => ({
  type: TOGGLE_MODAL,
  currentModal
});

export const requestUpload = () => ({
  type: REQUEST_UPLOAD,
});
