import React from "react";
import { ScrollView, Text } from "react-native";
import faker from "faker";
import moment from "moment";

import EventCard from "../EventCard";

const city = faker.address.city();
const country = faker.address.country();

const EventArray = [
  {
    id:faker.random.uuid(),
    name:faker.lorem.sentence(2),
    image:'https://source.unsplash.com/random?football',
    city:city,
    favorite:true,
    country:country,
    people:faker.random.number({ max: 15, min: 7 }),
    date: moment(faker.date.future()).format('ddd, MMM DD, hh:mm a '),
  },
  {
    id:faker.random.uuid(),
    name:faker.lorem.sentence(3),
    image:'https://source.unsplash.com/random?jogging',
    city:city,
    country:country,
    favorite:true,
    people:faker.random.number({ max: 25, min: 12 }),
    date: moment(faker.date.future()).format('ddd, MMM DD, hh:mm a '),
  },
];

const FavoriteEventsScreen = () => {
  return (
    <ScrollView style={{ backgroundColor: "lightgray" }}>
      {EventArray.map((value, index) => {
        return <EventCard key={value.id} value={value}></EventCard>
      })}
    </ScrollView>
  );
};

export default FavoriteEventsScreen;
