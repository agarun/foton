import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { updatePhoto, deletePhoto } from '../../actions/photo_actions';
import { toggleModal } from '../../actions/ui_actions';
import PhotoManage from './photo_manage';

const mapStateToProps = state => ({
  photos: state.entities.photos,
  users: state.entities.users,
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  toggleUploadModal: () => dispatch(toggleModal('UPLOAD')),
  fetchUser: username => dispatch(fetchUser(username)),
  updatePhoto: photo => dispatch(updatePhoto(photo)),
  deletePhoto: photoId => dispatch(deletePhoto(photoId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoManage);
