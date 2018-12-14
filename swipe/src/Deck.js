import React, { Component } from "react";
import { View, Animated, PanResponder } from "react-native";

class Deck extends Component {
  constructor(props) {
    super(props);

    const postition = new Animated.ValueXY();

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        postition.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: () => {}
    });

    this.state = { postition, panResponder };

    // notice we will never setState on panResponder,
    // panResponder is its own object, nothing to do with state,
    // 'this._panResponder = panResponder' and accessing
    // it via 'this._panResponder in other methods, would have been VALID..
    // however keep it in state, since thats how the documention has it.

    // probably should be - doesnt make sense to use state, since both are changing without setState
    // this._postition = postition;
    // this._panResponder = panResponder;
  }

  renderCards() {
    return this.props.data.map(item => {
      return this.props.renderCard(item);
    });
  }

  render() {
    return (
      <Animated.View
        style={this.state.postition.getLayout()}
        {...this.state.panResponder.panHandlers}
      >
        {this.renderCards()}
      </Animated.View>
    );
  }
}

export default Deck;
