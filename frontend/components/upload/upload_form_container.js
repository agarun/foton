import { connect } from 'react-redux';
import { toggleModal, fetchUpload } from '../../actions/ui_actions';
import { createPhoto } from '../../actions/photo_actions';
import { clearErrors } from '../../actions/error_actions';
import UploadForm from './upload_form';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  showModal: state.ui.modal.showModal,
  isFetching: state.ui.upload.isFetching,
  errors: state.errors.upload,
});

const mapDispatchToProps = dispatch => ({
  toggleUploadModal: () => dispatch(toggleModal('UPLOAD')),
  fetchUpload: () => dispatch(fetchUpload()),
  createPhoto: photo => dispatch(createPhoto(photo)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadForm);
