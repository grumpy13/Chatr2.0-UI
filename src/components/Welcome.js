import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "../Style.css";

class Welcome extends Component {
  render() {
    if (this.props.user) {
      return <Redirect to="/Hello" />;
    }
    return (
      <header className="masthead d-flex">
        <div className="container text-center my-auto z-1">
          <h1 className="mb-1 cloud-text cloud-title ">WELCOME TO CHATR</h1>
          <h3 className="mb-5 cloud-text attribute">
            <em>You're gonna need to login to see the messages</em>
          </h3>
          <Link to="/login" className="btn btn-info btn-lg">
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
