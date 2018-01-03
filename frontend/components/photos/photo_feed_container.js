import { connect } from 'react-redux';
import PhotoFeed from './photo_feed';
import { fetchPhotoFeed } from '../../actions/photo_actions';

const mapStateToProps = state => ({
  users: state.entities.users,
  photos: Object.keys(state.entities.photos)
            .map(key => state.entities.photos[key]),
});

const mapDispatchToProps = dispatch => ({
  fetchPhotoFeed: () => dispatch(fetchPhotoFeed()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoFeed);
