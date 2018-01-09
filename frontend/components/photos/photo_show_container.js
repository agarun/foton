import { connect } from 'react-redux';
import { fetchPhoto } from '../../actions/photo_actions';
import { fetchUser } from '../../actions/user_actions';
import PhotoShow from './photo_show';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const isModal = !!ownProps.photoId;
  const photoId = ownProps.photoId || ownProps.match.params.photoId;
  const photo = state.entities.photos[photoId];
  const author = photo ? state.entities.users[photo.author_id] : null;

  return {
    isModal,
    photoId,
    photo,
    author,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPhoto: photoId => dispatch(fetchPhoto(photoId)),
  fetchUser: username => dispatch(fetchUser(username)),
});

export default withRouter(
    connect(
    mapStateToProps,
    mapDispatchToProps
  )(PhotoShow)
);
