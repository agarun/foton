import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { search } from '../../actions/search_actions';
import SearchResultsPhotos from './search_results_photos';
import SearchResultsUsers from './search_results_users';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchType: '' };
    this.performSearchQuery = this.performSearchQuery.bind(this);
  }

  componentDidMount() {
    this.performSearchQuery(this.props.location.search);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.search !== nextProps.location.search) {
      this.performSearchQuery(nextProps.location.search);
    }
  }

  performSearchQuery(locationData) {
    const query = new URLSearchParams(locationData);
    const searchText = query.get('query');
    const searchType = query.get('type') || 'photos';
    this.props.search(searchText, searchType)
      .then((() => {
        this.setState({ searchType });
      }).bind(this));
  }

  render() {
    if (!this.state.searchType) return null;
    const SearchResultsType = this.state.searchType === 'users'
      ? SearchResultsUsers
      : SearchResultsPhotos;

    return <SearchResultsType />;
  }
}

const mapDispatchToProps = dispatch => ({
  search: (searchText, searchType) => dispatch(search(searchText, searchType)),
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(SearchResults)
);
