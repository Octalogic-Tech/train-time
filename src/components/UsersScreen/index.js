import React from "react";
import { ScrollView, Text } from "react-native";
import faker from "faker";

import UserCard from "../UserCard";

const city = faker.address.city();
const country = faker.address.country();

const UserArray = [
  {
    id:faker.random.uuid(),
    name:faker.name.findName(),
    city:city,
    country:country,
    favorite:true,
    image:faker.image.avatar(),
    cover:'https://source.unsplash.com/random',
    language:'EN',
  },
  {
    id:faker.random.uuid(),
    name:faker.name.findName(),
    city:city,
    favorite:false,
    country:country,
    image:faker.image.avatar(),
    cover:'https://source.unsplash.com/random?beach',
    language:'DE',
  },
];

const UsersScreen = () => {
  return (
    <ScrollView style={{ backgroundColor: "lightgray" }}>
      {UserArray.map((value, index) => {
        return <UserCard key={value.id} value={value}></UserCard>
      })}
    </ScrollView>
  );
};

export default UsersScreen;
