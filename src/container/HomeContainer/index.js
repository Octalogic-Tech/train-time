import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import Icon from "react-native-vector-icons/Ionicons";

import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import HeaderOptions from "../../components/HeaderOptions";
import EventsScreen from "../../components/EventsScreen";
import UsersScreen from "../../components/UsersScreen";
import SearchScreen from "../../components/SearchScreen";

const topNavigator = createMaterialTopTabNavigator({
  Events: {
    screen: EventsScreen,
  },
  Users: {
    screen: UsersScreen,
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
  Home: {
    screen: topNavigator,
    navigationOptions: ({ navigation }) => ({
      title: "Train Time",
      headerTitleStyle: { color: "#FFF" },
      headerStyle: { backgroundColor: "#282c2f" },
      headerRightContainerStyle: {
        marginRight: 20
      },
      headerTintColor: "white",
      headerRight: () => (
        <Icon
          name="md-search"
          size={25}
          color={"#2699FB"}
          onPress={() => navigation.navigate("Search")}
        />
      )
    })
  },
  Search: {
    screen: SearchScreen,
    navigationOptions: ({ navigation }) => HeaderOptions("Search", navigation)
  }
});
