import React from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../../actions/ui_actions';
import { logOut } from '../../actions/session_actions';
import UploadSVG from '../svg/upload';
import NavProfileDropdown from './nav_profile_dropdown';
import NavSearch from './nav_search';

const NavContent = ({ showUploadModal, logOut, currentUser }) => (
  <ul>
    <NavSearch />
    <NavProfileDropdown
      logOut={logOut}
      currentUser={currentUser}
    />
    <li className="upload-button">
      <a onClick={showUploadModal}>
        <UploadSVG />
        &nbsp;
        Upload
      </a>
    </li>
  </ul>
);

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  showUploadModal: () => dispatch(toggleModal('UPLOAD')),
  logOut: () => dispatch(logOut()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavContent);
