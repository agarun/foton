import React from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../../actions/ui_actions';

const NavContent = ({ showUploadModal }) => (
  <ul>
    <li className="upload-button">
      {/* UploadSVG */}
      <a onClick={showUploadModal}>Upload</a>
    </li>
    <li>
      {/* Profile Dropdown */}
    </li>
  </ul>
);

const mapDispatchToProps = dispatch => ({
  showUploadModal: () => dispatch(toggleModal('upload')),
});

export default connect(
  null,
  mapDispatchToProps
)(NavContent);
