import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

// Actions

// Components

class HELLO extends Component {
  render() {
    if (!this.props.user) {
      return <Redirect to="/Welcome" />;
    }
    const style = {
      fontFamily: "monospace"
    };
    // let myChannels = [];
    // myChannels = this.props.channelsList.filter(
    //   channel => channel.user === this.props.user
    // );
    // const channels = myChannels.map((element) => {
    //     return (
    //       <tr key={element.id}>
    //         <td>{element.name}</td>
    //         <td>{element.message}</td>
    //       </tr>
    //     );
    //   });
    return (
      <div className="container text-center" style={style}>
        <h3>HELLO {this.props.user && this.props.user.username}</h3>
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
