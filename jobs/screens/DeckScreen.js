import React, { Component } from "react";
import { View, Text } from "react-native";

class DeckScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      tabBarLabel: "Deck"
    };
  };

  render() {
    return (
      <View>
        <Text>DeckScreen</Text>
      </View>
    );
  }
}

export default DeckScreen;
