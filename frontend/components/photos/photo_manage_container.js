import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { updatePhoto } from '../../actions/photo_actions';
import { toggleModal } from '../../actions/ui_actions';
import PhotoManage from './photo_manage';

const mapStateToProps = state => ({
  photos: state.entities.photos,
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  toggleUploadModal: () => dispatch(toggleModal('UPLOAD')),
  fetchUser: username => dispatch(fetchUser(username)),
  updatePhoto: photo => dispatch(updatePhoto(photo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoManage);
