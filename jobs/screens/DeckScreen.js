import React, { Component } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { connect } from "react-redux";
import { MapView } from "expo";
import { Card, Button } from "react-native-elements";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import Swipe from "../components/Swipe";

import * as actions from "../actions";

class DeckScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      tabBarLabel: "Deck"
    };
  };

  renderCard(job) {
    const initialRegion = {
      longitude: job.longitude,
      latitude: job.latitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.02
    };
    return (
      <Card title={job.jobtitle}>
        <View style={{ height: 300 }}>
          <MapView
            scrollEnabled={false}
            style={{ flex: 1 }}
            cacheEnabled={Platform.OS === "android"}
            initialRegion={initialRegion}
          />
        </View>
        <View style={styles.detailWrapper}>
          <Text>{job.company}</Text>
          <Text>{job.formattedRelativeTime}</Text>
        </View>
        <View style={{ height: 90 }}>
          <Text>
            {" "}
            {job.snippet
              .replace(/<b>/g, "")
              .replace(/<\/b/g, "")
              .trim()}
          </Text>
        </View>
      </Card>
    );
  }

  renderNoMoreCards() {
    return <Card title='No more jobs' />;
  }

  render() {
    return (
      <View style={{ paddingTop: getStatusBarHeight() }}>
        <Swipe
          data={this.props.jobs}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          onSwipeRight={job => this.props.likeJob(job)}
          keyProp='jobkey'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  detailWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
    marginTop: 10
  }
});

function mapStateToProps({ jobs }) {
  return { jobs: jobs.results };
}

export default connect(
  mapStateToProps,
  actions
)(DeckScreen);
