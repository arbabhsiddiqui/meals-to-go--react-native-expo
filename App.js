import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from "react-native";
import Restaurants from "./src/features/restaurants/screens/restaurants.screens";

export default function App() {
  return (
    <>
      <Restaurants />
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: "#333",
  },
  SearchBarContainer: {
    margin: 20,
  },
});
