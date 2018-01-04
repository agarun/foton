import React from 'react';
import { connect } from 'react-redux';
import UploadForm from '../upload/upload_form_container';
import FollowModalContainer from '../follows/follow_modal_container';
import PhotoShowModal from '../photos/photo_show_modal';

const MODAL_COMPONENTS = {
  'UPLOAD': UploadForm,
  'FOLLOWS': FollowModalContainer,
  'PHOTO_SHOW': PhotoShowModal,
};

const ModalRoot = ({ currentModal, currentModalProps, showModal }) => {
  // `ModalRoot` shows at least 1 and at most 1 modal,
  // uses a `react-modal` portal, and retains a closing animation
  if (!currentModal) return null;

  const Modal = MODAL_COMPONENTS[currentModal];
  return <Modal {...currentModalProps} />;
};

export default connect(
  state => state.ui.modal
)(ModalRoot);
