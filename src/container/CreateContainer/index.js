import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator } from "react-navigation-stack";

import HeaderOptions from "../../components/HeaderOptions";
import CreateScreen from "../../components/CreateScreen";

export default createStackNavigator({
  Favorites: {
    screen: CreateScreen,
    navigationOptions: ({ navigation }) => HeaderOptions("Create Event", navigation)
  },
});
