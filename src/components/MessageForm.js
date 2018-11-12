import React, { Component } from "react";
import { connect } from "react-redux";

// Actions
import * as actionCreators from "../store/actions";

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
    this.submitMessage = this.submitMessage.bind(this);
    this.onTextchange = this.onTextchange.bind(this);
  }

  submitMessage(event) {
    event.preventDefault();
    this.props.addMessage(
      this.props.CHANNEL_ID,
      this.state,
      this.props.user.username
    );
  }

  onTextchange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.submitMessage}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Message</span>
          </div>
          <input
            type="text"
            className="form-control"
            name="message"
            onChange={this.onTextchange}
          />
        </div>
        <input type="submit" />
      </form>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
});

const mapDispatchToProps = dispatch => {
  return {
    addMessage: (id, newMessage, user) =>
      dispatch(actionCreators.addMessage(id, newMessage, user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageForm);
