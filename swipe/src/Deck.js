import React, { Component } from "react";
import { View, Animated, PanResponder } from "react-native";

class Deck extends Component {
  constructor(props) {
    super(props);

    const position = new Animated.ValueXY();

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: () => {}
    });

    this.state = { position, panResponder };

    // notice we will never setState on panResponder,
    // panResponder is its own object, nothing to do with state,
    // 'this._panResponder = panResponder' and accessing
    // it via 'this._panResponder in other methods, would have been VALID..
    // however keep it in state, since thats how the documention has it.

    // probably should be - doesnt make sense to use state, since both are changing without setState
    // this._postition = postition;
    // this._panResponder = panResponder;
  }

  getCardStyle() {
    const { position } = this.state;

    // position.x -> how much that componenet has moved in the x direction

    const rotate = position.x.interpolate({
      inputRange: [-500, 0, 500],
      outputRange: ["-120deg", "0deg", "120deg"]
    });

    return {
      ...position.getLayout(),
      transform: [{ rotate }]
    };
  }

  renderCards() {
    return this.props.data.map((item, index) => {
      if (index === 0) {
        return (
          <Animated.View
            key={item.id}
            style={this.getCardStyle()}
            {...this.state.panResponder.panHandlers}
          >
            {this.props.renderCard(item)}
          </Animated.View>
        );
      }
      return this.props.renderCard(item);
    });
  }

  render() {
    return <View>{this.renderCards()}</View>;
  }
}

export default Deck;
