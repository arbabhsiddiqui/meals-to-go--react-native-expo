import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import RestaurantsScreen from "../../features/restaurants/screens/restaurants.screens";
import RestaurantDetailScreens from "../../features/restaurants/screens/restaurant-detail.screens";
const RestaurantsStack = createStackNavigator();

const RestaurantsNavigation = () => {
  return (
    <RestaurantsStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RestaurantsStack.Screen
        name="Restaurant"
        component={RestaurantsScreen}
      />
      <RestaurantsStack.Screen
        name="RestaurantDetails"
        component={RestaurantDetailScreens}
      />
    </RestaurantsStack.Navigator>
  );
};

export default RestaurantsNavigation;
