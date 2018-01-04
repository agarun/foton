import { connect } from 'react-redux';
import { fetchPhoto } from '../../actions/photo_actions';
import { fetchUser } from '../../actions/user_actions';
import PhotoShow from './photo_show';

const mapStateToProps = (state, ownProps) => {
  const photoId = ownProps.match.params.photoId;
  const photo = state.entities.photos[photoId];
  const author = photo ? state.entities.users[photo.author_id] : null;

  return {
    photoId,
    photo,
    author,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPhoto: photoId => dispatch(fetchPhoto(photoId)),
  fetchUser: userId => dispatch(fetchUser(userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoShow);
