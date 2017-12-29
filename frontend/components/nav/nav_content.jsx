import React from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../../actions/ui_actions';
import UploadSVG from '../svg/upload';

const NavContent = ({ showUploadModal }) => (
  <ul>
    <li className="upload-button">
      <a onClick={showUploadModal}>
        <UploadSVG />
        &nbsp;
        Upload
      </a>
    </li>
    <li>
      {/* Profile Thumb */}
      {/* Profile Dropdown */}
        {/* Logout button for now */}
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
