import React, { Component } from "react";
import { NavLink } from "react-router-dom";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";

class ChannelNavLink extends Component {
  render() {
    const style = {
      fontFamily: "monospace",
      fontSize: "20px"
    };
    return (
      <li
        className="nav-item"
        data-toggle="tooltip"
        data-placement="right"
        title={this.props.channel.name}
      >
        <NavLink className="nav-link" to={`/channels/${this.props.channel.id}`}>
          <FontAwesomeIcon icon={faHashtag} />
          <span className="nav-link-text" style={style}>
            {" "}
            {this.props.channel.name}
          </span>
        </NavLink>
      </li>
    );
  }
}

export default ChannelNavLink;
