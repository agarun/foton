import React from 'react';
import { connect } from 'react-redux';
import { fetchRecommended } from '../../actions/discover_actions';
import DiscoverRecommendedUsers from './discover_recommended_users';
import DiscoverRecommendedPhotoRow from './discover_recommended_photos';
import Spinner from '../spinner/spinner';

class DiscoverRecommended extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isFetching: true };
  }

  componentDidMount() {
    this.props.fetchRecommended()
      .then(() => this.setState({ isFetching: false }));
  }

  render() {
    if (this.state.isFetching) {
      return <span className="discover-spinner"><Spinner /></span>;
    }

    return (
      <div>
        <section className="discover-recommended-users">
          <DiscoverRecommendedUsers />
        </section>
        {
          Object.keys(this.props.taggedPhotoIds).map(tagName => (
            <DiscoverRecommendedPhotoRow
              key={tagName}
              tagName={tagName}
              photoIds={this.props.taggedPhotoIds[tagName].photo_ids}
            />
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  taggedPhotoIds: state.ui.discover.recommended.taggedPhotoIds,
});

const mapDispatchToProps = dispatch => ({
  fetchRecommended: () => dispatch(fetchRecommended()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscoverRecommended);
