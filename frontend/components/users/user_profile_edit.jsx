import React from 'react';
import ReactModal from 'react-modal';
import CameraSVG from '../svg/camera';
import CheckSVG from '../svg/check';
import Spinner from '../spinner/spinner';

class UserProfileEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.user.id,
      bio: this.props.user.bio || '',
      location: this.props.user.location || '',
      profilePhotoFile: null,
      profilePhotoUrl: this.props.user.profile_photo_url || '',
      showCoverPhotoSelect: false,
      newCoverPhotoId: this.props.user.cover_photo_id,
      isUpdating: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showCoverPhotoSelect = this.showCoverPhotoSelect.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location !== nextProps.location && nextProps.showModal) {
      this.closeModal();
    }
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        profilePhotoFile: file,
        profilePhotoUrl: fileReader.result
      });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('id', this.state.id);
    formData.append('user[bio]', this.state.bio);
    formData.append('user[location]', this.state.location);
    if (this.state.profilePhotoFile) {
      formData.append('user[new_profile_photo]', this.state.profilePhotoFile);
    }
    if (this.state.newCoverPhotoId !== this.props.user.cover_photo_id) {
      formData.append('user[new_cover_photo_id]', this.state.newCoverPhotoId);
    }
    this.setState({ isUpdating: true }, () => {
      this.props.updateUser(formData)
        .then(() => {
          this.setState({ isUpdating: false }, () => this.closeModal());
        }, () => {
          this.setState({ isUpdating: false });
        });
    });
  }

  showCoverPhotoSelect() {
    this.setState({ showCoverPhotoSelect: true });
  }

  closeModal() {
    this.setState({ showCoverPhotoSelect: false, isUpdating: false });
    if (this.props.showModal) this.props.toggleUserProfileEditModal();
  }

  render() {
    const { user } = this.props;
    if (!user) return null;

    return (
      <ReactModal
        isOpen={this.props.showModal}
        onRequestClose={this.closeModal}
        closeTimeoutMS={300}
        className="user-profile-edit-modal"
        overlayClassName="user-profile-edit-overlay"
      >
        <section className="user-profile-edit-top">
          <section
            className="user-profile-edit-top-cover-photo"
            onClick={this.showCoverPhotoSelect}
          >
            <img src={user.cover_photo_medium_url} />
            <span className="user-profile-edit-cover-camera">
              <CameraSVG /> change your cover photo
            </span>
          </section>
          <label>
            <input
              type="file"
              onChange={this.handleFile}
              className="user-profile-edit-top-profile-photo-upload"
            />
            <section className="user-profile-edit-top-profile-photo">
              <img src={this.state.profilePhotoUrl} />
              <span className="user-profile-edit-profile-camera">
                <CameraSVG />
              </span>
            </section>
          </label>
        </section>
        <form
          onSubmit={this.handleSubmit}
          className="user-profile-edit-form"
        >
          <section className="user-profile-edit-form-info">
            <label htmlFor="about">About</label>
            <textarea
              type="text"
              id="about"
              onChange={this.handleChange('bio')}
              value={this.state.bio}
              placeholder="Tell us your story."
            />
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              onChange={this.handleChange('location')}
              value={this.state.location}
              placeholder="City"
            />
          </section>
          {
            this.state.showCoverPhotoSelect && (
              this.state.newCoverPhotoId ? (
                <section className="user-profile-edit-cover-photo-select">
                  {
                    user.photo_ids.map(photoId => (
                      <label key={photoId}>
                        <input
                          type="radio"
                          value={photoId}
                          onChange={this.handleChange('newCoverPhotoId')}
                          checked={photoId === parseInt(this.state.newCoverPhotoId)}
                        />
                        <img src={this.props.photos[photoId].thumb_image_url} />
                        {
                          photoId === parseInt(this.state.newCoverPhotoId) &&
                          <CheckSVG />
                        }
                      </label>
                    ))
                  }
                </section>
              ) : <div style={{textAlign: 'center'}}>
                You'll need to upload some photos first before
                setting a cover photo.
              </div>
            )
          }
          <section className="user-profile-edit-form-buttons">
            <span
              className="user-profile-edit-cancel"
              onClick={this.props.toggleUserProfileEditModal}
            >Cancel</span>
            {
              this.state.isUpdating ?
                <div className="user-profile-edit-spinner">
                  <Spinner />
                </div> :
                <button className="user-profile-edit-submit">
                  Submit
                </button>
            }
          </section>
        </form>
      </ReactModal>
    );
  }
}

export default UserProfileEdit;
