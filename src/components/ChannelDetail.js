import React, { Component } from "react";

// Components
import Loading from "./Loading";
import AddMessageModal from "./AddMessageModal";

import { connect } from "react-redux";

// Actions
import * as actionCreators from "../store/actions";

class ChannelDetail extends Component {
  componentDidMount() {
    this.props.getChannel(this.props.match.params.CHANNEL_ID);
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.match.params.CHANNEL_ID !== this.props.match.params.CHANNEL_ID
    ) {
      this.props.getChannel(this.props.match.params.CHANNEL_ID);
    }
  }

  render() {
    const { loading } = this.props;
    let messages = [];
    if (this.props.channelMessages.length >= 1) {
      messages = this.props.channelMessages.map(element => {
        return (
          <tr key={element.id}>
            <td>{element.username}</td>
            <td>{element.message}</td>
          </tr>
        );
      });
    }

    if (loading) {
      return <Loading />;
    } else {
      return (
        <div className="channel">
          <div className="container">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">username</th>
                  <th scope="col">message</th>
                </tr>
              </thead>
              <tbody>{messages}</tbody>
            </table>
            {this.props.user && (
              <AddMessageModal id={this.props.match.params.CHANNEL_ID} />
            )}
          </div>
        </div>
      );
    }
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
    getChannel: CHANNEL_ID =>
      dispatch(actionCreators.fetchChannelDetail(CHANNEL_ID))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelDetail);
