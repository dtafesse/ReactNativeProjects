import React, { Component } from "react";
import { View, Text, Platform, ScrollView, StyleSheet } from "react-native";
import { Button, Card } from "react-native-elements";
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

  renderLikedJobs() {
    return this.props.likedJobs.map(job => {
      return (
        <Card>
          <View style={{ height: 200 }}>
            <View style={styles.detailWrapper}>
              <Text style={styles.italics}>{job.company}</Text>
              <Text style={styles.italics}>{job.formattedRelativeTime}</Text>
            </View>
          </View>
        </Card>
      );
    });
  }

  render() {
    return <ScrollView>{this.renderLikedJobs()}</ScrollView>;
  }
}

const styles = StyleSheet.create({
  detailWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10
  },
  italics: {
    fontStyle: "italic"
  }
});

function mapStateToProps(state) {
  return { likedJobs: state.likedJobs };
}

export default connect(mapStateToProps)(ReviewScreen);
