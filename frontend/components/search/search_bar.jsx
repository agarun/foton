import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchSVG from '../svg/search';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: this.props.location.search
        ? new URLSearchParams(this.props.location.search).get('query')
        : '',
      searchType: this.props.location.search
        ? new URLSearchParams(this.props.location.search).get('type')
        : 'photos',
      showDropdown: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.search !== nextProps.location.search) {
      this.setState({
        searchText: (
          new URLSearchParams(nextProps.location.search).get('query') || ''
        ),
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    return this.props.history.push(
      `/search?query=${this.state.searchText}&type=${this.state.searchType}`
    );
  }

  render() {
    return (
      <section className="search-bar">
        <form onSubmit={this.handleSubmit}>
          <input
            className="search-bar-input"
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            onFocus={(e) => {
              const oldValue = e.target.value;
              e.target.value = '';
              e.target.value = oldValue; // move focus to the end of input
            }}
            onChange={e => this.setState({ searchText: e.target.value })}
            placeholder="Search Foton for photos or users"
            value={this.state.searchText}
          />
          <button className="search-bar-icon">
            <SearchSVG />
          </button>
          <ul
            className="search-bar-type"
            onClick={() => (
              this.setState({ showDropdown: !this.state.showDropdown })
            )}
          >
            <li className="search-bar-type-menu">
              <div className="search-bar-type-menu-text">
                {
                  this.state.searchType.charAt(0).toUpperCase() +
                  this.state.searchType.slice(1).toLowerCase()
                }
              </div>
              <span className="search-bar-type-menu-arrow"></span>
              {
                this.state.showDropdown &&
                  <ul className="search-bar-type-submenu">
                    <li
                      onClick={() => this.setState({ searchType: 'photos' })}
                    >
                      Photos
                    </li>
                    <li
                      onClick={() => this.setState({ searchType: 'users' })}
                    >
                      Users
                    </li>
                  </ul>
              }
            </li>
          </ul>
        </form>
      </section>
    );
  }
}

export default withRouter(SearchBar);
