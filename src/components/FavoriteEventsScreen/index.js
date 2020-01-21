import React,  { useState, useEffect } from "react";
import { ScrollView, Text } from "react-native";
import faker from "faker";
import moment from "moment";
import { connect } from 'react-redux';
import EventCard from "../EventCard";
import {fetchProductsBegin} from '../../store/actions/action';



const FavoriteEventsScreen = (props) => {
  useEffect(() => {
    // Update the document title using the browser API
    props.fetchProductsBegin()
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
  products: state.items,
});

const mapDispatchToProps = {
  fetchProductsBegin
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteEventsScreen);
