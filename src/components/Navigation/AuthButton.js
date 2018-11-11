import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faSignInAlt,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";

// Actions
import * as actionCreators from "/Users/grumpy/Development/REACT/Chatr2.0-UI/src/store/actions";

class AuthButton extends Component {
  render() {
    // const user = this.props.user;
    let buttons;

    if (this.props.user) {
      buttons = [
        <li key="logutButton" className="nav-item">
          <button
            onClick={() => this.props.logout()}
            className="nav-link btn btn-danger"
          >
            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
          </button>
        </li>
      ];
    } else {
      buttons = [
        <li key="loginButton" className="nav-item">
          <Link to="/login" className="nav-link">
            <FontAwesomeIcon icon={faSignInAlt} /> Login
          </Link>
        </li>,
        <li key="signupButton" className="nav-item">
          <Link to="/signup" className="nav-link">
            <FontAwesomeIcon icon={faUserPlus} /> Signup
          </Link>
        </li>
      ];
    }

    return (
      <ul className="navbar-nav ml-auto">
        <span className="navbar-text mr-2">
          {this.props.user && this.props.user.username}
        </span>
        {buttons}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(actionCreators.logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthButton);
