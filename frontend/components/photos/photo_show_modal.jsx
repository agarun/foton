import React from 'react';
import ReactModal from 'react-modal';
import PhotoShow from './photo_show_container';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleModal } from '../../actions/ui_actions';


class PhotoShowModal extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.props.history.goBack();
    this.props.togglePhotoShowModal();
  }

  render() {
    if (!this.props.location.state) return <span />;

    return (
      <ReactModal
        isOpen={this.props.showModal}
        onRequestClose={this.closeModal}
        closeTimeoutMS={500}
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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PhotoShowModal)
);
