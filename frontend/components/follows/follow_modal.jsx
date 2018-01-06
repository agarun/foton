import React, { Component } from 'react';
import ReactModal from 'react-modal';
import FollowModalItem from './follow_modal_item';

class FollowModal extends Component {
  constructor(props) {
    super(props);
    this.state = { isFetching: true };
  }

  componentDidMount() {
    const { user } = this.props.currentModalProps;
    this.props.processRequest(user)
      .then(() => this.setState({ isFetching: false }));
  }

  componentWillReceiveProps(nextProps) {
    const requestType = this.props.currentModalProps;
    const nextRequestType = nextProps.currentModalProps.requestType;

    if (nextRequestType && requestType !== nextRequestType) {
      nextProps.processRequest(nextProps.currentModalProps.user)
        .then(() => this.setState({ isFetching: false }));
    }
    if (nextRequestType &&
       this.props.location.pathname !== nextProps.location.pathname) {
      this.setState({ isFetching: true }, () => (
        this.props.toggleFollowsModal(this.props.currentModalProps.user)
      ));
    }
  }

  render() {
    if (this.state.isFetching) return null;
    const { user, requestType } = this.props.currentModalProps;

    return (
      <ReactModal
        isOpen={this.props.showModal}
        onRequestClose={() => this.props.toggleFollowsModal(user)}
        closeTimeoutMS={500}
        className="follow-modal"
        overlayClassName="follow-overlay"
      >
        <section className="follow-modal-header">
          <section className="follow-modal-header-stats">
            <strong>{requestType}</strong>
            &nbsp;
            {this.props.userIds.length}
          </section>
          <button
            className="follow-modal-header-close"
            onClick={() => this.props.toggleFollowsModal(user)}
          ></button>
        </section>
        <section className="follow-modal-scroll">
          <ul className="follow-modal-users">
            {
              this.props.userIds &&
              this.props.userIds.map(userId => (
                <FollowModalItem
                  key={userId}
                  user={this.props.users[userId]}
                />
              ))
            }
        </ul>
        </section>
      </ReactModal>
    );
  }
}

export default FollowModal;
