import * as React from "react";
import { View, Text } from "react-native";
import { Surface, Button, Card, Paragraph } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";

const EventCard = ({ value }) => {
  return (
    <Card style={{ margin: 10 }}>
      <Card.Title
        title={value.name}
        subtitle={value.city + ", " + value.country}
        right={props => <Icon color="red" name={value.favorite?"ios-heart":"ios-heart-empty"} size={25} />}
        rightStyle={{ margin: 10 }}
      />
      <Card.Cover source={{ uri: value.image }} />
      <Card.Content>
        <View style={{ marginTop:5 , display: "flex", flexDirection:'row', justifyContent: "space-between" }}>
          {/* <Title>{value.people} people joined</Title> */}
          <Paragraph>{value.date}</Paragraph>
          <Surface style={{elevation: 4,paddingHorizontal: 8,paddingVertical: 4, borderRadius:3}}>
            <Text><Text style={{fontWeight: 'bold', fontSize: 15}}>{value.people}</Text> attending</Text>
          </Surface>
        </View>
      </Card.Content>
      <Card.Actions>
        <Button>Share</Button>
        <Button>Join</Button>
      </Card.Actions>
    </Card>
  );
};

export default EventCard;
