import React from "react";
import { View, ScrollView, Text, Picker, StyleSheet } from "react-native";
import { Dropdown } from "react-native-material-dropdown";
import { Button } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';


const SearchScreen = () => {
  const placeholder1 = {
    label: 'Select a Country...',
    value: null,
    color: '#9EA0A4',
  };
  const placeholder2 = {
    label: 'Select a City...',
    value: null,
    color: '#9EA0A4',
  };
  const placeholder3 = {
    label: 'Select a sport...',
    value: null,
    color: '#9EA0A4',
  };
  const placeholder4 = {
    label: 'Select a Language...',
    value: null,
    color: '#9EA0A4',
  };


  return (
    <ScrollView > 
    <View style={{ margin: 10 }}>
        
    <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'India', value: 'india' },
                { label: 'France', value: 'france' },
                { label: 'Turkey', value: 'turkey' },
            ]}
            style={pickerSelectStyles}
            placeholder={placeholder1}
        />

<RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Milan', value: 'milan' },
                { label: 'Istanbul', value: 'istanbul' },
                { label: 'Kiev', value: 'kiev' },
            ]}
            style={pickerSelectStyles}
            placeholder={placeholder2}
        />
     <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Football', value: 'football' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
            ]}
            style={pickerSelectStyles}
            placeholder={placeholder3}
        />
      <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'English', value: 'english' },
                { label: 'French', value: 'french' },
                { label: 'Italian', value: 'italian' },
            ]}
            placeholder={placeholder4}
            style={pickerSelectStyles}
        />

      <Button icon="" mode="contained" onPress={() => console.log('Pressed')}>
    Find
  </Button>
  </View>
  </ScrollView>
  );
};
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    margin: 1,
    marginBottom: 10,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    margin: 1,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});


export default SearchScreen