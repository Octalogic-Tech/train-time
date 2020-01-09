import React from "react";
import { View, Text, Button } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Icon from "react-native-vector-icons/Ionicons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Details!</Text>
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {/* other code from before here */}
        <Text>All events and Users</Text>
      </View>
    );
  }
}

class FavoritesScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {/* other code from before here */}
        <Text>Favorites</Text>
      </View>
    );
  }
}

class AddEventScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {/* other code from before here */}
        <Text>Add</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {/* other code from before here */}
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate("Details")}
        />
      </View>
    );
  }
}

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: `Train Time`,
      headerTitleStyle: { color: "#FFF" },
      headerStyle: { backgroundColor: "#282c2f" },
      headerRightContainerStyle: {
        marginRight: 20,
      },
      headerRight:()=>(
        <Icon
              name="md-search"
              size={20}
              color={"#2699FB"}
              onPress={() => navigation.navigate("Details")}
        />
      ),
    })
  },
  Details: { screen: DetailsScreen }
});

const SettingsStack = createStackNavigator({
  Settings: { screen: SettingsScreen },
  Details: { screen: DetailsScreen }
});

const FavoritesStack = createStackNavigator({
  Settings: { screen: FavoritesScreen },
  Details: { screen: DetailsScreen }
});

const AddEventStack = createStackNavigator({
  Settings: { screen: AddEventScreen },
  Details: { screen: DetailsScreen }
});

export default createAppContainer(
  createMaterialBottomTabNavigator(
    {
      Home: {
        screen: HomeStack,
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
        screen: FavoritesStack,
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
        screen: AddEventStack,
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
        screen: SettingsStack,
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
