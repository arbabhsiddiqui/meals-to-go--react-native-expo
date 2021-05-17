import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";
import firebase from "firebase/app";

import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
// import "firebase/storage";

// font import
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

// contextProviders
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

// Initialize Firebase
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAtH_jmuMAKdMbns7RjoPe2SojFHRbM3JI",
  authDomain: "mealstogo-ac9fd.firebaseapp.com",
  projectId: "mealstogo-ac9fd",
  storageBucket: "mealstogo-ac9fd.appspot.com",
  messagingSenderId: "831710415845",
  appId: "1:831710415845:web:7e2ba75b0b8c9161263d0c",
};
// Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
