import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleModal } from '../../actions/ui_actions';
import PhotoFeed from './photo_feed_container';
import PhotoShow from './photo_show_container';
import PhotoShowModal from '../photos/photo_show_modal';

class PhotoShowSwitch extends React.Component {
  constructor(props) {
    super(props);

    // static class constants
    this.constructor.previousLocation =
      this.constructor.previousLocation || this.props.location;
    this.constructor.isModal =
      this.constructor.isModal || false;
  }

  // componentWillReceiveProps(next) {
  //   debugger
  // }

  componentWillUpdate(nextProps) {
    if (
      nextProps.history.action !== 'POP' &&
      (!this.props.location.state || !this.props.location.state.modal)
    ) {
      this.constructor.previousLocation
        = this.props.location;
    }
  }

  componentDidUpdate() {
    if (this.constructor.isModal) this.props.togglePhotoShowModal();
  }

  render() {
    this.constructor.isModal = Boolean(
        this.props.location.state &&
        this.props.location.state.isModal &&
        this.constructor.previousLocation !== this.props.location
    );
    const isModal = this.constructor.isModal;
    const previousLocation = this.constructor.previousLocation;

    return (
      <Switch location={
        isModal ? previousLocation : this.props.location
      }>
        <Route exact path="/" component={PhotoFeed} />
        <Route exact path="/photos/:photoId" component={PhotoShow} />
      </Switch>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  togglePhotoShowModal: user => dispatch(toggleModal('PHOTO_SHOW')),
});

export default connect(
  null,
  mapDispatchToProps
)(PhotoShowSwitch);
