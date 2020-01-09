import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import Icon from "react-native-vector-icons/Ionicons";

import HeaderOptions from "../../components/HeaderOptions";
import HomeScreen from "../../components/HomeScreen";
import SearchScreen from "../../components/SearchScreen";

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         {/* other code from before here */}
//         <Text>All Events and Users</Text>
//       </View>
//     );
//   }
// }

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Details!</Text>
      </View>
    );
  }
}

export default createStackNavigator({
  Home: {
    screen: HomeScreen,
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
