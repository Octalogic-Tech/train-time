import React, { useState } from "react";
import { View, Text, Picker } from "react-native";
import { TextInput } from "react-native-paper";
import { Dropdown } from "react-native-material-dropdown";

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
          borderColor: "gray",
          borderStyle: "solid",
          padding: 0,
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
    </View>
  );
};

export default CreateScreen;
