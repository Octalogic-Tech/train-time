import React from "react";
import { View, Text, Button } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Icon from "react-native-vector-icons/Ionicons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import HomeContainer from './src/container/HomeContainer';
import SettingsContainer from './src/container/SettingsContainer';
import FavoritesContainer from './src/container/FavoritesContainer';
import CreateContainer from './src/container/CreateContainer';



export default createAppContainer(
  createMaterialBottomTabNavigator(
    {
      Home: {
        screen: HomeContainer,
        navigationOptions: {
          tabBarIcon: ({ focused }) => (
            <Icon
              name="md-pulse"
              size={20}
              color={focused ? "#2699FB" : "#848a8e"}
            />
          )
        }
      },
      Favorites: {
        screen: FavoritesContainer,
        navigationOptions: {
          tabBarIcon: ({ focused }) => (
            <Icon
              name="ios-heart"
              size={20}
              color={focused ? "#2699FB" : "#848a8e"}
            />
          )
        }
      },
      Create: {
        screen: CreateContainer,
        navigationOptions: {
          tabBarIcon: ({ focused }) => (
            <Icon
              name="ios-add"
              size={25}
              color={focused ? "#2699FB" : "#848a8e"}
            />
          )
        }
      },
      Settings: {
        screen: SettingsContainer,
        navigationOptions: {
          tabBarIcon: ({ focused }) => (
            <Icon
              name="md-person"
              size={20}
              color={focused ? "#2699FB" : "#848a8e"}
            />
          )
        }
      }
    },
    {
      initialRouteName: "Home",
      activeColor: "#2699FB",
      barStyle: { backgroundColor: "#282c2f" }
    }
  )
);
