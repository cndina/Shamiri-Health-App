import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import CentralStack from "./navigation";

export default function App() {
  return (
    <NavigationContainer>
      <CentralStack />
    </NavigationContainer>
  );
}
