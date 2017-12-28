import { connect } from 'react-redux';
import { toggleModal } from '../../actions/ui_actions';
import UploadForm from './upload_form';

const mapStateToProps = state => ({
  showModal: state.ui.upload.showModal
});

const mapDispatchToProps = dispatch => ({
  toggleUploadModal: () => dispatch(toggleModal('upload')),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadForm);
