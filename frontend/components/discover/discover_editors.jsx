import React from 'react';
import { connect } from 'react-redux';
import { fetchEditorsChoicePhotos } from '../../actions/discover_actions';
import PhotoGallery from '../photos/photo_gallery';

class DiscoverEditorsChoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isFetching: true };
  }

  componentDidMount() {
    this.props.fetchEditorsChoicePhotos()
      .then(() => this.setState({ isFetching: false }));
  }

  render() {
    if (this.state.isFetching) return null;

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
