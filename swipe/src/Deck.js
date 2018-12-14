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

  getCardStyle() {
    return {
      ...this.state.postition.getLayout(),
      transform: [{ rotate: "-45deg" }]
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
