import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator } from "react-navigation-stack";

import HeaderOptions from "../../components/HeaderOptions";
import SettingsScreen from "../../components/SettingsScreen";

export default createStackNavigator({
  Settings: {
    screen: SettingsScreen,
    navigationOptions: ({ navigation }) => HeaderOptions("Settings", navigation)
  },
});
