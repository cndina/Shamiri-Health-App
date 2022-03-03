import React from "react";
import "react-native-gesture-handler";
import "expo-updates";
import { NavigationContainer } from "@react-navigation/native";
import CentralStack from "./navigation";

export default function App() {
  return (
    <NavigationContainer>
      <CentralStack />
    </NavigationContainer>
  );
}
