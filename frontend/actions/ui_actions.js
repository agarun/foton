export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const FETCH_UPLOAD = 'FETCH_UPLOAD';

export const toggleModal = currentModal => ({
  type: TOGGLE_MODAL,
  currentModal
});

export const fetchUpload = () => ({
  type: FETCH_UPLOAD,
});
