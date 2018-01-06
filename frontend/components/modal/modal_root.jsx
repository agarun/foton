import React from 'react';
import { connect } from 'react-redux';
import UploadForm from '../upload/upload_form_container';
import FollowModalContainer from '../follows/follow_modal_container';
import PhotoShowModal from '../photos/photo_show_modal';
import UserProfileEdit from '../users/user_profile_edit_container';

const MODAL_COMPONENTS = {
  'UPLOAD': UploadForm,
  'FOLLOWS': FollowModalContainer,
  'PHOTO_SHOW': PhotoShowModal,
  'PROFILE_EDIT': UserProfileEdit,
};

const ModalRoot = (props) => {
  const { currentModal } = props;

  // `ModalRoot` shows at least 1 and at most 1 modal,
  // uses a `react-modal` portal, and retains a closing animation
  if (!currentModal) return null;

  const Modal = MODAL_COMPONENTS[currentModal];
  return <Modal {...props} />;
};

export default connect(
  state => state.ui.modal
)(ModalRoot);
