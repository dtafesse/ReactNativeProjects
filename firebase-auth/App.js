import React from "react";
import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

export default class App extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
        <SignUp />
        <SignIn />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around"
  }
});
