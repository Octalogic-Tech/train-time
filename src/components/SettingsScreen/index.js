import React from "react";
import { ScrollView, View, Text } from "react-native";
import { Button } from "react-native-paper";
import { List } from "react-native-paper";

const SettingsScreen = () => {
  return (
    <ScrollView>
      <List.Section>
        <List.Item
          title="My profile"
          left={() => <List.Icon icon="account-outline" />}
        />
        <List.Item
          title="Create an activity"
          left={() => <List.Icon color="#000" icon="plus" />}
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
          left={() => <List.Icon icon="folder-multiple-image" />}
        />
        <List.Item
          title="My Events"
          left={() => <List.Icon color="#000" icon="calendar-outline" />}
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
          left={() => <List.Icon icon="settings-outline" />}
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
          left={() => <List.Icon icon="account-multiple-plus-outline" />}
        />
        <List.Item
          title="Logout"
          titleStyle={{color:'red'}}
          left={() => <List.Icon color="red" icon="logout-variant" />}
        />
      </List.Section>
    </ScrollView>
    
  );
};

export default SettingsScreen;
