import React, { Component } from "react";
import { View, Text } from "react-native";
import { FormLabel, FormInput, Button } from "react-native-elements";
import axios from "axios";

const ROOT_URL =
  "https://us-central1-one-time-password-b31ae.cloudfunctions.net";

class SignUp extends Component {
  state = { phone: "" };

  handleSubmit = () => {
    axios
      .post(`${ROOT_URL}/createUser`, {
        phone: this.state.phone
      })
      .then(() => {
        axios.post(`${ROOT_URL}/requestOneTimePassword`, {
          phone: this.state.phone
        });
      });
  };

  render() {
    return (
      <View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Phone Number</FormLabel>
          <FormInput
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
          />
        </View>
        <Button onPress={this.handleSubmit} title='Submit' />
      </View>
    );
  }
}

export default SignUp;
