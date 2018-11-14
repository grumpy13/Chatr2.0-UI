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
    this.props.addMessage(this.props.id, this.state, this.props.user.username);
    this.setState({ message: " " });
  }

  onTextchange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.submitMessage} className="text-center">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            name="message"
            placeholder="Message..."
            value={this.state.message}
            onChange={this.onTextchange}
          />
          <input type="submit" value="SEND" className="btn btn-info" />
        </div>
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
