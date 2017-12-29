import { connect } from 'react-redux';
import { toggleModal } from '../../actions/ui_actions';
import { createPhoto } from '../../actions/photo_actions';
import { clearErrors } from '../../actions/error_actions';
import UploadForm from './upload_form';

const mapStateToProps = state => ({
  showModal: state.ui.upload.showModal,
  errors: state.errors.upload,
});

const mapDispatchToProps = dispatch => ({
  toggleUploadModal: () => dispatch(toggleModal('upload')),
  createPhoto: photo => dispatch(createPhoto(photo)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadForm);
