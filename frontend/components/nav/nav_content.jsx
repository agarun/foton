import React from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../../actions/ui_actions';

const NavContent = ({ showUploadModal }) => (
  <ul>
    {/* UploadSVG */}
    <a onClick={showUploadModal}>Upload</a>
    {/* Profile Dropdown */}
  </ul>
);

const mapDispatchToProps = dispatch => ({
  showUploadModal: () => dispatch(toggleModal('upload')),
});

export default connect(
  null,
  mapDispatchToProps
)(NavContent);
