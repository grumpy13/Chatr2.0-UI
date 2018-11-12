import React, { Component } from "react";
import { connect } from "react-redux";

// Actions
import * as actionCreators from "../store/actions";

class ChannelForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
      //   last_name: "",
      //   imageUrl: "",
      //   books: []
    };
    this.submitChannel = this.submitChannel.bind(this);
    this.onTextchange = this.onTextchange.bind(this);
  }

  submitChannel(event) {
    event.preventDefault();
    this.props.addChannel(this.state);
  }

  onTextchange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.submitChannel}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Name</span>
          </div>
          <input
            type="text"
            className="form-control"
            name="name"
            onChange={this.onTextchange}
          />
        </div>
        <input type="submit" />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addChannel: newChannelName =>
      dispatch(actionCreators.addChannel(newChannelName))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ChannelForm);
