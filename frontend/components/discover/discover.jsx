import React from 'react';
import DiscoverRecommended from './discover_recommended';
import DiscoverEditorsChoice from './discover_editors';

class Discover extends React.Component {
  constructor(props) {
    super(props);
    this.state = { discoverType: 'RECOMMENDED' };
  }

  render() {
    return (
      <section className="main">
        <section className="discover-top">
          <div className="discover-header">
            Discover trending photos
          </div>
          <div className="discover-description">
            {
              this.state.discoverType === 'RECOMMENDED'
                ? 'Browse new posts and find inspiration.'
                : <div className="discover-recommended-editor">
                    Photos selected by editor <a href="https://agarun.com">Aaron Agarunov</a>.
                  </div>
            }
          </div>
          <ul className="discover-nav">
            <li
              className={this.state.discoverType === 'RECOMMENDED'
                ? 'discover-nav-active'
                : undefined
              }
              onClick={() => this.setState({ discoverType: 'RECOMMENDED' })}
            >
              recommended
            </li>
            <li
              className={this.state.discoverType === 'EDITORS'
                ? 'discover-nav-active'
                : undefined
              }
              onClick={() => this.setState({ discoverType: 'EDITORS' })}
            >
              editors' choice
            </li>
          </ul>
        </section>
        <section className="discover-content">
          {
            this.state.discoverType === 'RECOMMENDED'
              ? <DiscoverRecommended />
              : <DiscoverEditorsChoice />
          }
        </section>
      </section>
    );
  }
}

export default Discover;
