import React from 'react';
import ReactModal from 'react-modal';
import Spinner from '../spinner/spinner';
import { Creatable } from 'react-select';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);

    this.initialState = {
      title: '',
      description: '',
      imageFile: null,
      imageUrl: '',
      tags: [],
    };

    this.state = Object.assign({}, this.initialState);

    this.handleChange = this.handleChange.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  handleChange(field) {
    return (e) => (
      this.setState({ [field]: e.target.value })
    );
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    };

    if (file) {
      fileReader.readAsDataURL(file);
      if (!this.state.title.length) this.setState({ title: file.name });
      if (this.props.errors) this.props.clearErrors();
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo[title]', this.state.title);
    formData.append('photo[description]', this.state.description);
    formData.append('photo[tags]', JSON.stringify(this.state.tags));
    if (this.state.imageFile) {
      formData.append('photo[image]', this.state.imageFile);
      this.props.fetchUpload();
    }
    this.props.createPhoto(formData)
      .then(() => {
        this.props.history.push(`/${this.props.currentUser.username}`);
      });
  }

  resetState() {
    const blankState = Object.assign({}, this.initialState);
    blankState.tags = [];
    this.setState(blankState);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location !== nextProps.location && nextProps.showModal) {
      this.props.toggleUploadModal();
    }
  }

  componentWillUpdate() {
    if (this.props.errors && !this.props.showModal) this.props.clearErrors();
    if (!this.props.showModal && this.state.imageFile) this.resetState();
  }

  render() {
    const { toggleUploadModal, showModal, isFetching, errors } = this.props;

    return (
      <ReactModal
        isOpen={showModal}
        contentLabel="Upload Photo"
        onRequestClose={toggleUploadModal}
        closeTimeoutMS={200}
        className="upload-modal"
        overlayClassName="upload-overlay"
      >
        <section className="upload-area">
          {
            this.state.imageFile ? (
              <img
                className="upload-image-preview"
                src={this.state.imageUrl}
                alt="preview of image to upload"
                onClick={this.resetState}
              />
            ) : (
              <label className="upload-select">
                Select Photo
                <input
                  type="file"
                  onChange={this.handleFile}
                />
              </label>
            )
          }
        </section>
        <form
          className="upload-form"
          onSubmit={this.handleSubmit}
        >
          <section className="upload-form-submit">
            {
              isFetching
                ? <Spinner />
                : (
                  showModal &&
                  <button className="green-button upload-submit-button">
                    Submit
                  </button>
                )
            }
          </section>
          <section
            className="upload-form-input"
            style={{
              opacity: isFetching ? 0.5 : 1,
              pointerEvents: isFetching ? 'none' : 'auto',
            }}
          >
            {
              errors && (
                <section className="upload-errors">
                  {errors.join('\n')}
                </section>
              )
            }
            <label>
              Title
              <input
                onChange={this.handleChange('title')}
                value={this.state.title}
              />
            </label>
            <label>
              Description
              <textarea
                onChange={this.handleChange('description')}
                value={this.state.description}
              />
            </label>
            <label>
              Tags
              <section className="upload-form-tags">
                <Creatable
                  multi={true}
                  onInputChange={value => (
                    value.replace(/[^0-9a-z\s]/i, '').toLowerCase()
                  )}
                  onChange={tags => this.setState({ tags })}
                  value={this.state.tags}
                  noResultsText={null}
                  placeholder={null}
                  promptTextCreator={tagName => (
                    <span>
                      Add tag <strong style={{ fontWeight: 700 }}>
                        {tagName}
                      </strong>
                    </span>
                  )}
                  isValidNewOption={({ label }) => (
                    label && label.length <= 20
                  )}
                />
              </section>
            </label>
          </section>
        </form>
        <button
          className="upload-close"
          onClick={toggleUploadModal}>
        </button>
      </ReactModal>
    );
  }
}

export default UploadForm;
