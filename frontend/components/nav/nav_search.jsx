import React from 'react';
import SearchSVG from '../svg/search';
import { withRouter } from 'react-router-dom';

class NavSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    return this.props.history.push(
      `/search?query=${this.state.searchText}&type=photos`
    );
  }

  render() {
    return (
      <li className="nav-search">
        <form
          className="nav-search-submit"
          onSubmit={this.handleSubmit}
        >
          <input
            type="text"
            name="search"
            autoComplete="off"
            onChange={e => this.setState({ searchText: e.target.value })}
            placeholder="Search for photos and users"
          />
          <button>
            <SearchSVG />
          </button>
        </form>
      </li>
    );
  }
}

export default withRouter(NavSearch);
