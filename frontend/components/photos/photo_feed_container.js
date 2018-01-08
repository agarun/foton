import { connect } from 'react-redux';
import PhotoFeed from './photo_feed';
import { fetchPhotoFeed } from '../../actions/photo_actions';

const mapStateToProps = state => ({
  users: state.entities.users,
  photos: Object.keys(state.entities.photos)
            .map(key => state.entities.photos[key]).reverse(),
  isFetchingNextPage: state.ui.scroll.feed.isFetchingNextPage,
  hasNextPage: state.ui.scroll.feed.hasNextPage,
});

const mapDispatchToProps = dispatch => ({
  loadNextPage: ({ startIndex }) => (
    dispatch(fetchPhotoFeed(startIndex))
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoFeed);
