import React, { useState } from "react";
import { View, Text, Picker } from "react-native";
import { TextInput } from "react-native-paper";
import { Dropdown } from "react-native-material-dropdown";
import { Button } from 'react-native-paper';

const CreateScreen = () => {
  const [name, setName] = useState("");
  const [sport, setSport] = useState("");

  return (
    <View style={{ margin: 10 }}>
      <TextInput
        label="Name"
        value={name}
        mode="outlined"
        onChangeText={text => setName({ text })}
      />
      <Dropdown
        label="Sport"
        dropdownMargins={{ min: 5, max: 10 }}
        containerStyle={{
          borderWidth: 1,
          borderRadius:2,
          borderColor: "grey",
          borderStyle: "solid",
          paddingRight: 6,
          paddingLeft: 6,
          marginVertical:10,
        }}
        pickerStyle={{
          marginVertical:0,
        }}
        data={[
          {
            value: "Archery"
          },
          {
            value: "Rowing"
          },
          {
            value: "Bowling"
          },
          {
            value: "Croquet"
          },
          {
            value: "Jogging"
          },
          {
            value: "Badminton"
          }
        ]}
      />
      <Dropdown
        label="Language"
        dropdownMargins={{ min: 5, max: 10 }}
        containerStyle={{
          borderWidth: 1,
          borderRadius:2,
          borderColor: "grey",
          borderStyle: "solid",
          paddingRight: 6,
          paddingLeft: 6,
          marginVertical:10,
        }}
        pickerStyle={{
          marginVertical:0,
        }}
        data={[
          {
            value: "English"
          },
          {
            value: "Portuguese"
          },
          {
            value: "Spanish"
          }
        ]}
      />
      <Dropdown
        label="Country"
        dropdownMargins={{ min: 5, max: 10 }}
        containerStyle={{
          borderWidth: 1,
          borderRadius:2,
          borderColor: "grey",
          borderStyle: "solid",
          paddingRight: 6,
          paddingLeft: 6,
          marginVertical:10,
        }}
        pickerStyle={{
          marginVertical:0,
        }}
        data={[
          {
            value: "India"
          },
          {
            value: "Portugal"
          },
          {
            value: "Spain"
          },
          {
            value: "Pakistan"
          },
      
        ]}
      />
      <Dropdown
        label="City"
        dropdownMargins={{ min: 5, max: 10 }}
        containerStyle={{
          borderWidth: 1,
          borderRadius:2,
          borderColor: "grey",
          borderStyle: "solid",
          paddingRight: 6,
          paddingLeft: 6,
          marginVertical:10,
        }}
        pickerStyle={{
          marginVertical:0,
        }}
        data={[
          {
            value: "Melbourne"
          },
          {
            value: "London"
          },
          {
            value: "Sydney"
          },
          {
            value: "Paris"
          },
          {
            value: "New York"
          },
          {
            value: "Milan"
          }
        ]}
      />
      <Dropdown
        label="Number of Participants"
        dropdownMargins={{ min: 5, max: 10 }}
        containerStyle={{
          borderWidth: 1,
          borderRadius:2,
          borderColor: "grey",
          borderStyle: "solid",
          paddingRight: 6,
          paddingLeft: 6,
          marginVertical:10,
        }}
        pickerStyle={{
          marginVertical:0,
        }}
        data={[
          {
            value: "1"
          },
          {
            value: "2"
          },
          {
            value: "3"
          },
        ]}
      />
      <Button mode="contained" onPress={() => console.log('Pressed')}>
    Create Event
  </Button>
    </View>
  );
};

export default CreateScreen;
