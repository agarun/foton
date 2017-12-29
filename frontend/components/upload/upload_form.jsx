import React from 'react';
import ReactModal from 'react-modal';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);
  }

  // upload form things

  render() {
    const { toggleUploadModal, showModal } = this.props;

    return (
      <ReactModal
        isOpen={showModal}
        contentLabel="Upload Photo"
        onRequestClose={toggleUploadModal}
        closeTimeoutMS={200}
        className="upload-modal"
        overlayClassName="upload-overlay"
      >
        <p>Modal Content</p>
        <button onClick={toggleUploadModal}>
          X
        </button>
      </ReactModal>
    );
  }

}

export default UploadForm;
