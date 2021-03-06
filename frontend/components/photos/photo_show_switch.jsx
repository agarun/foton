import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleModal } from '../../actions/ui_actions';
import { MainPage } from '../../util/main_page_util';
import PhotoFeed from './photo_feed_container';
import PhotoShow from './photo_show_container';
import PhotoShowModal from '../photos/photo_show_modal';
import Search from '../search/search';
import Discover from '../discover/discover';
import About from '../pages/about';
import UserProfile from '../users/user_profile_container';

class PhotoShowSwitch extends React.Component {
  constructor(props) {
    super(props);

    this.constructor.previousLocation = props.location;
    this.constructor.isModal = false;
  }

  componentWillUpdate(nextProps) {
    if (
      nextProps.history.action !== 'POP' &&
      (!this.props.location.state || !this.props.location.state.modal)
    ) {
      this.constructor.previousLocation
        = this.props.location;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.constructor.isModal ||
      this.constructor.previousLocation.state || (
        prevProps.match.params &&
        this.props.location.pathname.slice(1, 6) === 'photo'
      ) && (
        prevProps.location !== this.props.location
      )
    ) {
      this.props.togglePhotoShowModal();
    }
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
        <Route exact path="/" component={MainPage} />
        <Route exact path="/photos/:photoId" component={PhotoShow} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/about" component={About} />
        <Route exact path="/:username" component={UserProfile} />
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
