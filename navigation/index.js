import React from "react";
import Home from "../screens/home";
import Daily from "../screens/daily";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const CentralStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Daily"
        component={Daily}
        options={{
          headerStyle: {
            backgroundColor: "#fcfcfc",
          },
          headerTintColor: "#767577",
          headerTitleAlign: "center",
        }}
      />
      {/* <Stack.Screen name="CollapsedView" component={CollapsedView} /> */}
    </Stack.Navigator>
  );
}

export default CentralStack