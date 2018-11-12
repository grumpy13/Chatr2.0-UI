import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Welcome extends Component {
  render() {
    if (this.props.user) {
      return <Redirect to="/CreateChannel" />;
    }
    return (
      <header className="masthead d-flex">
        <div className="container text-center my-auto z-1">
          <h1 className="mb-1">WELCOME TO CHATR</h1>
          <h3 className="mb-5">
            <em>You're gonna need to login to see the messages</em>
          </h3>
          <Link to="/login" className="btn btn-primary btn-lg">
            Login
          </Link>
        </div>
        <div className="overlay z-0" />
      </header>
    );
  }
}
const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  null
)(Welcome);
