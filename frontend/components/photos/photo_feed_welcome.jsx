import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleModal } from '../../actions/ui_actions';
import CameraSVG from '../svg/camera';
import UploadSVG from '../svg/upload';
import SearchSVG from '../svg/search';
import UserSVG from '../svg/user';

const PhotoFeedWelcome = ({ currentUser, showUploadModal }) => (
  <section className="main">
    <section className="photo-feed-welcome">
      <div className="photo-feed-welcome-title">
        Welcome to Foton, <span style={{ fontWeight: '600' }}>{currentUser.username}</span>!
      </div>
      <div className="photo-feed-welcome-subtitle">
        Upload, discover, search or follow users to get started.
      </div>
      <ul className="photo-feed-welcome-cards">
        <a onClick={showUploadModal}>
          <li>
            <UploadSVG />
            Upload<br />your favorite shot
          </li>
        </a>
        <Link to="/discover">
          <li>
            <CameraSVG />
            Discover<br />inspiring photos
          </li>
        </Link>
        <Link to={`/${currentUser.username}`}>
          <li>
            <UserSVG />
            Check out<br />your profile
          </li>
        </Link>
        <Link to="/search">
          <li>
            <SearchSVG />
            Search Foton's<br />posts or users
          </li>
        </Link>
      </ul>
    </section>
  </section>
);

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  showUploadModal: () => dispatch(toggleModal('UPLOAD')),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoFeedWelcome);
