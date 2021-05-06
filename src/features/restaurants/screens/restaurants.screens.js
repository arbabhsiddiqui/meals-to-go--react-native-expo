import React from "react";
import styled from "styled-components";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";

import SearchBar from "../../../components/SearchBar";

import RestaurantInfoCard from "../components/restaurant-info-card.components";

const SafeArea = styled.SafeAreaView`
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  flex: 1;
  background-color: #333;
`;

const SearchBarContainer = styled.View`
  margin: 20px;
`;

const RestaurantListContainer = styled.View`
  padding: 20px;
`;

const Restaurants = () => {
  return (
    <SafeArea>
      <SearchBarContainer>
        <SearchBar />
      </SearchBarContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
};

export default Restaurants;
