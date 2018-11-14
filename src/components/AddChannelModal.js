import React, { Component } from "react";
import Modal from "react-responsive-modal";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import ChannelForm from "./ChannelForm";

class AddChannelModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }
  componentDidMount() {
    this.onOpenModal();
  }
  onOpenModal() {
    this.setState({ open: true });
  }

  onCloseModal() {
    this.setState({ open: false });
    this.props.history.goBack();
  }
  // componentWillUnmount() {
  //   return <Redirect to="/Hello" />;
  // }

  render() {
    if (!this.props.user) {
      return <Redirect to="/Hello" />;
    }
    const { open } = this.state;
    return (
      <div className="col-lg-4 col-md-6 col-12">
        <div>
          <Modal open={open} onClose={this.onCloseModal} center>
            <ChannelForm />
          </Modal>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  null
)(AddChannelModal);
