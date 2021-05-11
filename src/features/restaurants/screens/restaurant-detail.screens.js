import React from "react";
import { View, Text } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.components";

import { SafeArea } from "../../../components/utility/safe-area.component";

const RestaurantDetailScreens = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
    </SafeArea>
  );
};

export default RestaurantDetailScreens;
