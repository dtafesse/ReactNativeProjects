import React, { Component } from "react";
import { View, Text } from "react-native";
import { MapView } from "expo";

class MapScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      tabBarLabel: "Review Jobs"
    };
  };

  state = {
    region: {
      longitude: -122,
      latitude: 37,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView style={{ flex: 1 }} region={this.state.region} />
      </View>
    );
  }
}

export default MapScreen;
