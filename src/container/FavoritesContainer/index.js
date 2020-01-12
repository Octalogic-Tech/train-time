import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator } from "react-navigation-stack";

import HeaderOptions from "../../components/HeaderOptions";
import FavoriteEventsScreen from "../../components/FavoriteEventsScreen";
import FavoriteUsersScreen from "../../components/FavoriteUsersScreen";

import { createMaterialTopTabNavigator } from 'react-navigation-tabs';


const topNavigator = createMaterialTopTabNavigator({
  Events: {
    screen: FavoriteEventsScreen,
  },
  Users: {
    screen: FavoriteUsersScreen,
  },
},
{
  swipeEnabled: true,
  tabBarOptions:{
    activeTintColor: '#2699FB',
    inactiveTintColor: '#ffffff',
    style: {
      backgroundColor: "#282c2f",
    },
    indicatorStyle:{
      backgroundColor: "#2699FB",
    },
  },
  initialRouteName: "Events",
});

export default createStackNavigator({
  Favorites: {
    screen: topNavigator,
    navigationOptions: ({ navigation }) => HeaderOptions("Favorites", navigation)
  },
});
