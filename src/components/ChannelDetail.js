import React, { Component } from "react";

// Components
import MessageForm from "./MessageForm";

import { connect } from "react-redux";

// Actions
import * as actionCreators from "../store/actions";

class ChannelDetail extends Component {
  componentDidMount() {
    this.interval = setInterval(
      () => this.props.getChannelMessages(this.props.match.params.CHANNEL_ID),
      3000
    );
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.match.params.CHANNEL_ID !== this.props.match.params.CHANNEL_ID
    ) {
      clearInterval(this.interval);
      this.interval = setInterval(
        () => this.props.getChannelMessages(this.props.match.params.CHANNEL_ID),
        3000
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const style = {
      fontFamily: "monospace",
      fontSize: "20px"
    };
    const messages = this.props.channelMessages.map((element, idx) => {
      return (
        <tr key={element.message + idx}>
          <strong>
            <td className="text-uppercase float-left">{element.username}:</td>
          </strong>
          <td className="float-left">{element.message}</td>
        </tr>
      );
    });
    return (
      <div className="channel">
        <div className="container jumbotron">
          <table className="table" style={style}>
            <thead className="thead-light" />
            <tbody>{messages}</tbody>
          </table>
          {this.props.user && (
            <MessageForm id={this.props.match.params.CHANNEL_ID} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    channelMessages: state.channel.channelMessages,
    loading: state.channel.loading,
    user: state.auth.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getChannelMessages: CHANNEL_ID =>
      dispatch(actionCreators.fetchChannelDetail(CHANNEL_ID))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelDetail);
