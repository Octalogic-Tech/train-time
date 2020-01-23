import React,  { useEffect }  from "react";
import { ScrollView, Text } from "react-native";
import faker from "faker";
import { connect } from 'react-redux';
import {fetchUser, fetchProductsBegin} from '../../store/actions/action';

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

const UsersScreen = (props) => {
  useEffect(() => {
    // Update the document title using the browser API
    props.fetchUser(UserArray)
  });

  return (
    <ScrollView style={{ backgroundColor: "lightgray" }}>
      {props.users.map((value, index) => {
        return <UserCard key={value.id} value={value}></UserCard>
      })}
    </ScrollView>
  );
};

const mapStateToProps = state => ({
  users: state.UserArray,
});

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (value) => {
      dispatch(fetchUser(value));
    }
  };
}

export default  connect(mapStateToProps, mapDispatchToProps)(UsersScreen);
