import React from "react";
import { ScrollView, View, Text } from "react-native";
import { Button } from "react-native-paper";
import { List } from "react-native-paper";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const SettingsScreen = () => {
  return (
    <ScrollView>
      <List.Section>
        <List.Item
          title="My profile"
          left={() => <Icon name="account-outline" size={25} style={{paddingHorizontal:"5%"}} color="#282c2f" />}
        />
        <List.Item
          title="Create an activity"
          left={() => <Icon name="plus" size={25} style={{paddingHorizontal:"5%"}} color="#282c2f" />}
        />
      </List.Section>
      <View
        style={{
          borderBottomColor: "lightgray",
          borderBottomWidth: 1
        }}
      />
      <List.Section>
        <List.Item
          title="My Media"
          left={() => <Icon name="folder-multiple-image" size={20} style={{paddingHorizontal:"5%"}} color="#282c2f" />}
        />
        <List.Item
          title="My Events"
          left={() => <Icon name="calendar-outline" size={25} style={{paddingHorizontal:"5%"}} color="#282c2f" />}
        />
      </List.Section>
      <View
        style={{
          borderBottomColor: "lightgray",
          borderBottomWidth: 1
        }}
      />
      <List.Section>
        <List.Item
          title="Settings"
          left={() => <Icon name="settings-outline" size={25} style={{paddingHorizontal:"5%"}} color="#282c2f" />}
        />
      </List.Section>
      <View
        style={{
          borderBottomColor: "lightgray",
          borderBottomWidth: 1
        }}
      />
      <List.Section>
        <List.Item
          title="Invite Friends"
          left={() => <Icon name="account-multiple-plus-outline" size={25} style={{paddingHorizontal:"5%"}} color="#282c2f" />}
        />
        <List.Item
          title="Logout"
          titleStyle={{color:'red'}}
          left={() => <Icon name="logout-variant" size={25} style={{paddingHorizontal:"5%"}} color="red" />}
        />
      </List.Section>
    </ScrollView>
    
  );
};

export default SettingsScreen;
