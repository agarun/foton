import React, { Component } from 'react';
import PhotoFeedItem from './photo_feed_item';
import Spinner from '../spinner/spinner';

class PhotoFeed extends Component {
  constructor(props) {
    super(props);
    this.state = { isFetching: true };
  }

  componentDidMount() {
    this.props.fetchPhotoFeed()
      .then(this.setState({ isFetching: false }));
  }

  // TODO componentWillReceiveProps if logging in as a different user?
  // TODO isFetching ui state && spinner when fetching

  render() {
    debugger
    return (
      <section className="main">
        <ul className="photo-feed">
          {
            this.props.photos.map(photo => (
              <PhotoFeedItem
                key={photo.id}
                photo={photo}
                author={this.props.users[photo.author_id]}
              />
            ))
          }
        </ul>
        {
          this.state.isFetching &&
            <span className="photo-feed-spinner"><Spinner /></span>
        }
      </section>
    );
  }
}

export default PhotoFeed;
