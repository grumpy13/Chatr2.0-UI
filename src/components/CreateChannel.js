import React, { Component } from "react";
import { connect } from "react-redux";
// Components

import AddChannelModal from "./AddChannelModal";

class CreateChannel extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <div className="row">{this.props.user && <AddChannelModal />}</div>
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
)(CreateChannel);
