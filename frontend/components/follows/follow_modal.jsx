import React, { Component } from 'react';
import ReactModal from 'react-modal';
import FollowModalItem from './follow_modal_item';

class FollowModal extends Component {
  componentDidMount() {
    this.props.processRequest(this.props.user);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.requestType !== nextProps.requestType) {
      nextProps.processRequest(nextProps.user);
    }
    // debugger
    // if (nextProps.requestType &&
    //   this.props.requestType !== nextProps.requestType) {
    //   nextProps.processRequest(this.props.user);
    // }
    // TODO if path is diff toggle modal
  }

  render() {
    // debugger
    return (
      <ReactModal
        isOpen={this.props.showModal}
        onRequestClose={() => this.props.toggleFollowsModal(this.props.user)}
        closeTimeoutMS={400}
        className="follow-modal"
        overlayClassName="follow-overlay"
      >
        <section className="follow-modal-header">
          <section className="follow-modal-header-stats">
            <strong>{this.props.requestType}</strong>
            &nbsp;
            {this.props.userIds.length}
          </section>
          <button
            className="follow-modal-header-close"
            onClick={() => this.props.toggleFollowsModal(this.props.user)}
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

    componentWillDismount() {
      debugger
    }

}

export default FollowModal;
