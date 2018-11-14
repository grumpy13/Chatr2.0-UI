import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

// Actions
import * as actionCreators from "/Users/grumpy/Development/REACT/Chatr2.0-UI/src/store/actions";

// Components
import NavBar from "./components/Navigation/NavBar";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import Welcome from "./components/Welcome";
import RegistrationForm from "./components/RegistrationForm";
import SuperSecretPage from "./components/SuperSecretPage";
import ChannelDetail from "./components/ChannelDetail";
import AddChannelModal from "./components/AddChannelModal";
import HELLO from "./components/HELLO";
import "./App.css";

class App extends Component {
  componentDidMount() {
    if (this.props.user) {
      this.props.fetchChannels();
    }
  }

  render() {
    return (
      <div className="content-wrapper">
        <NavBar />
        <Switch>
          <Route path="/channels/:CHANNEL_ID" component={ChannelDetail} />
          <Route path="/channels/:CHANNEL_ID/send/" component={ChannelDetail} />
          <Route path="/welcome" component={Welcome} />
          <Route path="/Hello" component={HELLO} />
          <Route path="/CreateChannel" component={AddChannelModal} />
          <Route path="/(login|signup)" component={RegistrationForm} />
          <PrivateRoute path="/private" component={SuperSecretPage} />
          <Redirect to="/welcome" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.auth.user
});

const mapDispatchToProps = dispatch => {
  return {
    fetchChannels: () => dispatch(actionCreators.fetchChannels())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
