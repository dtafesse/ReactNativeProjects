import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { MapView } from "expo";
import { Card, Button } from "react-native-elements";
import Swipe from "../components/Swipe";

class DeckScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      tabBarLabel: "Deck"
    };
  };

  renderCard(job) {
    return (
      <Card title={job.jobtitle}>
        <View style={styles.detailWrapper}>
          <Text>{job.company}</Text>
          <Text>{job.formattedRelativeTime}</Text>
        </View>
        <Text>{job.snipper.replace(/<b>/g, "").replace(/<\/b/g, "")}</Text>
      </Card>
    );
  }

  render() {
    return (
      <View>
        <Swipe
          data={this.props.jobs}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  detailWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10
  }
});

function mapStateToProps(state) {
  return {
    jobs: state.jobs.result
  };
}

export default connect(mapStateToProps)(DeckScreen);
