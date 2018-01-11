import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { likePhoto, unlikePhoto } from '../../actions/photo_actions';
import HeartFullSVG from '../svg/heart_f';
import HeartOpenSVG from '../svg/heart_o';

const LikeButton = ({
  photo,
  isCurrentUserLikingPhoto,
  history,
  likePhoto,
  unlikePhoto,
}) => (
  isCurrentUserLikingPhoto
    ? <button
        className="unlike-button"
        onClick={() => {
          unlikePhoto(photo.id)
            .then(null, () => history.push('/login'));
        }}
      >
        <HeartFullSVG />
        <span>{photo.liker_ids.length}</span>
      </button>
    : <button
        className="like-button"
        onClick={() => {
          likePhoto(photo.id)
            .then(null, () => history.push('/login'));
        }}
      >
        <HeartOpenSVG />
        <span>{photo.liker_ids.length}</span>
      </button>
);

const mapStateToProps = (state, ownProps) => {
  const { photo } = ownProps;
  const { currentUser } = state.session;
  const isCurrentUserLikingPhoto =
    currentUser ? photo.liker_ids.includes(currentUser.id) : false;

  return {
    isCurrentUserLikingPhoto,
  };
};

const mapDispatchToProps = dispatch => ({
  likePhoto: photoId => dispatch(likePhoto(photoId)),
  unlikePhoto: photoId => dispatch(unlikePhoto(photoId)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LikeButton)
);
