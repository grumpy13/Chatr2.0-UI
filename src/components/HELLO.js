import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "../Style.css";
// import "../Test.scss";

// Actions

// Components

class HELLO extends Component {
  render() {
    if (!this.props.user) {
      return <Redirect to="/Welcome" />;
    }

    return (
      <div className="container text-center ">
        <h3 className="cloud-text cloud-title mb-5 text-uppercase">
          HELLO {this.props.user && this.props.user.username}
        </h3>
        <div className="cloud-text attribute mt-1">
          <ul>Add A New Channel</ul>
          <ul>Chat With Your Friends</ul>
          <ul>Or Just Be A Ghost And Stalk Them</ul>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  channelsList: state.channels.channelsList,
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  null
)(HELLO);
