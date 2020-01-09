import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator } from "react-navigation-stack";

import HeaderOptions from "../../components/HeaderOptions";
import FavoritesScreen from "../../components/FavoritesScreen";

export default createStackNavigator({
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: ({ navigation }) => HeaderOptions("Favorites", navigation)
  },
});
