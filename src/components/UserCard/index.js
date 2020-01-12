import * as React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";

const UserCard = ({value}) => {
  return (
    <Card style={{ margin: 10 }}>
      <Card.Cover source={{ uri: value.cover }} />
      <Card.Title
        title={value.name + ' ( ' + value.language + ' ) '}
        subtitle={value.city + ', ' + value.country}
        left={props => <Avatar.Image size={40} source={{uri : value.image }} />}
        right={props => <Icon color="red" name={value.favorite?"ios-heart":"ios-heart-empty"} size={25} />}
        rightStyle={{ margin: 10 }}
      />
    </Card>
  );
};

export default UserCard;
