import React, { Component } from "react";
import { View, Text } from "react-native";

class MapScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      tabBarLabel: "Review Jobs"
    };
  };

  render() {
    return (
      <View>
        <Text>MapScreen</Text>
      </View>
    );
  }
}

export default MapScreen;
