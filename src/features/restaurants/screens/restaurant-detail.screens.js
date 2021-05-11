import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.components";
import { MaterialIcons } from "@expo/vector-icons";

import { SafeArea } from "../../../components/utility/safe-area.component";

import { List } from "react-native-paper";

const RestaurantDetailScreens = ({ route }) => {
  const { restaurant } = route.params;

  const [expanded, setExpanded] = useState(true);

  const handlePress = () => setExpanded(!expanded);
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Section title="Menus">
          {/* breakfast */}
          <List.Accordion
            title="Breakfast"
            left={(props) => <List.Icon {...props} icon="bread-slice" />}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>

          {/* lunch */}
          <List.Accordion
            title="Lunch"
            left={(props) => <List.Icon {...props} icon="hamburger" />}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>

          {/* snacks */}
          <List.Accordion
            title="Snacks"
            left={(props) => <List.Icon {...props} icon="cup" />}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>

          {/* dinner */}
          <List.Accordion
            title="Dinner"
            left={(props) => <List.Icon {...props} icon="food-variant" />}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </SafeArea>
  );
};

export default RestaurantDetailScreens;
