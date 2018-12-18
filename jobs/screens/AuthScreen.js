import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions";

class AuthScreen extends Component {
  componentDidMount() {
    this.props.facebookLogin();
    this.onAuthComplete();
  }

  componentDidUpdate() {
    this.onAuthComplete();
  }

  onAuthComplete() {
    if (this.props.token) {
      this.props.navigation.navigate("map");
    }
  }

  render() {
    // add a spinner here?
    return <View />;
  }
}

function mapStateToProps(state) {
  return {
    token: state.auth.token
  };
}

export default connect(
  mapStateToProps,
  actions
)(AuthScreen);
