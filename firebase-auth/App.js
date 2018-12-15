import React from "react";
import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import firebase from "firebase";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

export default class App extends React.Component {
  componentDidMount() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyAYoiNWIo2fxoTbHTJCz5qBfq-EAqsivgw",
      authDomain: "one-time-password-b31ae.firebaseapp.com",
      databaseURL: "https://one-time-password-b31ae.firebaseio.com",
      projectId: "one-time-password-b31ae",
      storageBucket: "one-time-password-b31ae.appspot.com",
      messagingSenderId: "606337326190"
    };
    firebase.initializeApp(config);
  }

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
