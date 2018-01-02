import React from 'react';
import { connect } from 'react-redux';
import UploadForm from '../upload/upload_form_container';

const MODAL_COMPONENTS = {
  'UPLOAD': UploadForm,
};

const ModalRoot = ({ currentModal, showModal }) => {
  if (!currentModal) return null;

  const Modal = MODAL_COMPONENTS[currentModal];
  return <Modal />;
};

export default connect(
  state => state.ui.modal
)(ModalRoot);
