import React from 'react';
import ReactModal from 'react-modal';
import PhotoShow from './photo_show_container';
import { connect } from 'react-redux';
import { toggleModal } from '../../actions/ui_actions';

class PhotoShowModal extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal(e) {
    e.stopPropagation();
    this.props.history.goBack();
    if (this.props.showModal) this.props.togglePhotoShowModal();
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.location.pathname !== nextProps.location.pathname &&
      this.props.showModal
    ) {
      this.props.togglePhotoShowModal();
    }
  }

  render() {
    if (!this.props.location.state) return <span />;

    return (
      <ReactModal
        isOpen={this.props.showModal}
        onRequestClose={this.closeModal}
        closeTimeoutMS={200}
        className="photo-show-modal"
        overlayClassName="photo-show-overlay"
      >
        <PhotoShow
          closeModal={this.closeModal}
          photoId={this.props.location.state.photoId}
        />
      </ReactModal>
    );
  }
}

const mapStateToProps = state => ({
  showModal: state.ui.modal.showModal,
});

const mapDispatchToProps = dispatch => ({
  togglePhotoShowModal: () => dispatch(toggleModal('PHOTO_SHOW')),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoShowModal);
