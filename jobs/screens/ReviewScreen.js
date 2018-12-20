import React, { Component } from "react";
import { View, Text, Platform } from "react-native";
import { Button } from "react-native-elements";
import { connect } from "react-redux";

class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      headerTitle: "Review Jobs",
      tabBarLabel: "Review Jobs",
      headerRight: (
        <Button
          title='Settings'
          onPress={() => navigate("settings")}
          backgroundColor='rgba(0,0,0,0)'
          color='rgba(0,122,255,1)'
        />
      ),
      style: {
        marginTop: Platform.OS === "android" ? 24 : 0
      }
    };
  };

  render() {
    return (
      <View>
        <Text>ReviewScreen</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { likedJobs: state.likedJobs };
}

export default connect(mapStateToProps)(ReviewScreen);
