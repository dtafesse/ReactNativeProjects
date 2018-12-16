import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
import { Button } from "react-native-elements";

const SCREEN_WIDTH = Dimensions.get("window").width;

class Slides extends Component {
  renderLastSlide = index => {
    if (index === this.props.data.length - 1) {
      return (
        <Button
          title='Onwards'
          raised
          buttonStyle={styles.button}
          onPress={this.props.onComplete}
        />
      );
    }
  };

  renderSlides = ({ item, index }) => {
    return (
      <View style={[styles.slide, { backgroundColor: item.color }]}>
        <Text style={styles.slideText}>{item.text}</Text>
        {this.renderLastSlide(index)}
      </View>
    );
  };

  render() {
    return (
      <FlatList
        horizontal
        pagingEnabled
        data={this.props.data}
        keyExtractor={item => item.text}
        renderItem={this.renderSlides}
        style={{ flex: 1 }}
      />
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: SCREEN_WIDTH
  },

  slideText: {
    fontSize: 30,
    color: "white",
    textAlign: "center"
  },

  button: {
    backgroundColor: "#0288D1",
    marginTop: 15
  }
});

export default Slides;
