import React, { useState, useEffect }  from "react";
import { ScrollView, Text } from "react-native";
import EventCard from "../EventCard";
import { connect } from 'react-redux';
import {fetchFavs} from '../../store/actions/action';

let payload = [{
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
  favorite:false,
  country:country,
  people:faker.random.number({ max: 25, min: 12 }),
  date: moment(faker.date.future()).format('ddd, MMM DD, hh:mm a '),
},
{
  id:faker.random.uuid(),
  name:faker.lorem.sentence(3),
  favorite:false,
  image:'https://source.unsplash.com/random?rowing',
  city:city,
  country:country,
  people:faker.random.number({ max: 15, min: 7 }),
  date: moment(faker.date.future()).format('ddd, MMM DD, hh:mm a '),
},
{
  id:faker.random.uuid(),
  name:faker.lorem.sentence(2),
  favorite:false,
  image:'https://source.unsplash.com/random?badminton',
  city:city,
  country:country,
  people:faker.random.number({ max: 25, min: 12 }),
  date: moment(faker.date.future()).format('ddd, MMM DD, hh:mm a '),
}
];

const EventsScreen = (props) => {
  // this.props.dispatch(fetchProductsBegin());
  useEffect(() => {
    console.log("dfdf")
    // Update the document title using the browser API
    props.fetchFavs(payload)
  });
  return (
    <ScrollView style={{ backgroundColor: "lightgray" }}>
      {props.products.map((value, index) => {
        return <EventCard key={value.id} value={value}></EventCard>
      })}
    </ScrollView>
  );
};

const mapStateToProps = state => ({
  products: state.items
});

const mapDispatchToProps = dispatch => {
  fetchFavs()
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsScreen);
