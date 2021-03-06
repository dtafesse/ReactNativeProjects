import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { Icon } from "react-native-elements";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./store";
import AuthScreen from "./screens/AuthScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import MapScreen from "./screens/MapScreen";
import DeckScreen from "./screens/DeckScreen";
import ReviewScreen from "./screens/ReviewScreen";
import SettingsScreen from "./screens/SettingsScreen";

const MainNavigator = createBottomTabNavigator(
  {
    welcome: {
      screen: WelcomeScreen,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    auth: {
      screen: AuthScreen,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    main: createBottomTabNavigator(
      {
        map: MapScreen,
        deck: DeckScreen,
        review: createStackNavigator(
          {
            review: ReviewScreen,
            settings: SettingsScreen
          },
          {
            navigationOptions: {
              tabBarLabel: "Review Jobs",
              tabBarIcon: ({ tintColor }) => (
                <Icon name='favorite' size={25} color={tintColor} />
              )
            }
          }
        )
      },
      {
        navigationOptions: { tabBarVisible: false },
        tabBarOptions: {
          labelStyle: { fontSize: 11 }
        },
        tabBarPosition: "bottom",
        swipeEnabled: false
      }
    )
  },
  {
    lazy: true
  }
);

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  renderLoading = () => (
    <View style={styles.container}>
      <ActivityIndicator size='large' />
    </View>
  );

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={this.renderLoading()} persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
