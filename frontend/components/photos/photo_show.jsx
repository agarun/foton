import React from 'react';

class PhotoShow extends React.Component {

  componentDidMount() {
    if (!this.props.photo) {
      this.props.fetchPhoto(this.props.photoId)
      .then(payload => this.props.fetchUser(payload.photo.author_name));
    }
  }

  render() {
    if (!this.props.author) return null;

    return (
      <section className="main">
        {this.props.author.username}
        {this.props.photo.image_url}
      </section>
    );
  }
}

export default PhotoShow;
