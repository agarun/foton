import React from 'react';
import { connect } from 'react-redux';
import { fetchEditorsChoicePhotos } from '../../actions/discover_actions';
import PhotoGallery from '../photos/photo_gallery';

class DiscoverEditorsChoice extends React.Component {
  componentDidMount() {
    this.props.fetchEditorsChoicePhotos();
  }

  render() {
    return (
      <div className="discover-editors-choice">
        <PhotoGallery photoIds={this.props.photoIds} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  photoIds: state.ui.discover.editorsChoice,
});

const mapDispatchToProps = dispatch => ({
  fetchEditorsChoicePhotos: () => dispatch(fetchEditorsChoicePhotos()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscoverEditorsChoice);
