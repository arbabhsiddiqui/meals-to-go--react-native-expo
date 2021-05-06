import React from "react";
import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";

const RestaurantCard = styled(Card)`
  background-color: #fefefe;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 10px;
`;

const Title = styled.Text`
  padding: 16px;
  color: #000;
`;

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "abc",
    icon = "fab-facebook",
    photos = [
      "https://www.pexels.com/photo/flat-lay-photography-of-vegetable-salad-on-plate-1640777/",
    ],
    address = "289/24b moti nagar",
    isOpenNow = true,
    rating = 4,
    isCloseTemporarily = false,
  } = restaurant;
  return (
    <RestaurantCard>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
