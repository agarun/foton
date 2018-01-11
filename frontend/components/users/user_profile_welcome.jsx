import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { toggleModal } from '../../actions/ui_actions';

const UserProfileWelcome = ({ isCurrentUser, toggleUploadModal }) => (
  isCurrentUser
    ? <section className="user-profile-gallery-empty">
        <div className="user-profile-gallery-empty-header">
          You don't have any uploads yet.
        </div>
        <div className="user-profile-gallery-empty-info">
          Get started by&nbsp;
          <a onClick={toggleUploadModal}>uploading</a> a photo,&nbsp;
          <Link to="/search">searching</Link> for photos, or&nbsp;
          <Link to="/discover">discovering</Link> popular posts.
        </div>
      </section>
    : null
);

const mapStateToProps = (state, ownProps) => ({
  isCurrentUser:
    state.session.currentUser &&
    state.session.currentUser.username === ownProps.match.params.username,
});

const mapDispatchToProps = dispatch => ({
  toggleUploadModal: () => dispatch(toggleModal('UPLOAD')),
});

export default withRouter(
    connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserProfileWelcome)
);
