import React from 'react';
import { connect } from 'react-redux';
import UploadForm from '../upload/upload_form_container';

const MODAL_COMPONENTS = {
  'UPLOAD': UploadForm,
};

const ModalRoot = ({ currentModal, showModal }) => {
  // `ModalRoot` shows at least 1 and at most 1 modal,
  // uses a `react-modal` portal, and retains a closing animation
  if (!currentModal) return null;

  const Modal = MODAL_COMPONENTS[currentModal];
  return <Modal />;
};

export default connect(
  state => state.ui.modal
)(ModalRoot);
