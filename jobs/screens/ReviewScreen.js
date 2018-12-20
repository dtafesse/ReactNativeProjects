import React, { Component } from "react";
import {
  View,
  Text,
  Platform,
  FlatList,
  StyleSheet,
  Linking
} from "react-native";
import { Button, Card } from "react-native-elements";
import { connect } from "react-redux";
import { MapView } from "expo";

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

  renderLikedJob({ item }) {
    const {
      jobtitle,
      company,
      formattedRelativeTime,
      url,
      longitude,
      latitude
    } = item;

    const initialRegion = {
      longitude,
      latitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.02
    };

    return (
      <Card title={jobtitle}>
        <View style={{ height: 200 }}>
          <MapView
            style={{ flex: 1 }}
            scrollEnabled={false}
            cacheEnabled={Platform.OS === "android"}
            initialRegion={initialRegion}
          />
          <View style={styles.detailWrapper}>
            <Text style={styles.italics}>{company}</Text>
            <Text style={styles.italics}>{formattedRelativeTime}</Text>
          </View>
          <Button
            title='Apply Now!'
            backgroundColor='#03A9F4'
            onPress={() => Linking.openURL(url)}
          />
        </View>
      </Card>
    );
  }

  render() {
    return (
      <FlatList
        data={this.props.likedJobs}
        keyExtractor={item => item.jobkey}
        renderItem={this.renderLikedJob}
        style={{ flex: 1 }}
      />
    );
  }
}

const styles = StyleSheet.create({
  detailWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
    marginTop: 10
  },
  italics: {
    fontStyle: "italic"
  }
});

function mapStateToProps(state) {
  return { likedJobs: state.likedJobs };
}

export default connect(mapStateToProps)(ReviewScreen);
