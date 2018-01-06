import React from 'react';
import CheckSVG from '../svg/check';

class PhotoManage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      title: '',
      description: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePhotoChoice = this.handlePhotoChoice.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.username);

      // .then(
      //   payload => this.setState({
      //     user: payload.user, isFetching: false
      //   }), this.pageNotFound
      // );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updatePhoto(this.state)

  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handlePhotoChoice(photoId) {
    return (e) => {
      e.preventDefault();
      this.setState({
        id: photoId,
        title: this.props.photos[photoId].title || '',
        description: this.props.photos[photoId].description || '',
      });
    };
  }

  render() {
    return (
      <section className="main">
        <section className="photo-manage">
          <section className="photo-manage-left">
            <section className="photo-manage-left-upload">
              <button onClick={this.props.toggleUploadModal}>
                Upload to Profile
              </button>
            </section>
            <section className="photo-manage-left-photos">
              <section className="photo-manage-left-photos-heading">
                photos
              </section>
              <section className="photo-manage-left-photos-list">
                <section>All Photos</section>
                <section>55</section>
              </section>
            </section>
          </section>
          <section className="photo-manage-mid">
            <section className="photo-manage-mid-heading">
              All Photos
              &nbsp;
              <span>55 Photos</span>
            </section>
            <ul className="photo-manage-mid-photos">
              {
                Boolean(Object.keys(this.props.photos).length) &&
                this.props.currentUser.photo_ids.map(photoId => (
                  <li
                    key={photoId}
                    className={
                      this.state.id === photoId ?
                      'photo-manage-mid-photo photo-manage-mid-photo-active' :
                      'photo-manage-mid-photo'
                    }
                    onClick={this.handlePhotoChoice(photoId)}
                  >
                    <div className="photo-manage-mid-photo-wrapper">
                      <img src={this.props.photos[photoId].image_url} />
                      <CheckSVG />
                    </div>
                  </li>
                ))
              }
            </ul>
          </section>
          <section className="photo-manage-right">
            <h1>Edit Photo</h1>
            <form
              className="photo-manage-form"
              onSubmit={this.handleSubmit}
            >
              <label htmlFor="title">Title</label>
              <input
                id="title"
                type="text"
                onChange={this.handleChange('title')}
                value={this.state.title}
                placeholder="Give your photo a title"
              />
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                onChange={this.handleChange('description')}
                value={this.state.description}
                placeholder="Tell us about your photo"
              />
              <section className="photo-manage-form-buttons">
                Cancel
                {/* hover for cancel is red */}
                {/* cancel should hit a function that resets state */}
                <button>
                  Save
                </button>
              </section>
            </form>
          </section>
        </section>
      </section>
    );
  }

}

export default PhotoManage;
