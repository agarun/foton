export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const FETCH_UPLOAD = 'FETCH_UPLOAD';

export const toggleModal = (currentModal, currentModalProps) => ({
  type: TOGGLE_MODAL,
  currentModal,
  currentModalProps,
});

export const fetchUpload = () => ({
  type: FETCH_UPLOAD,
});
