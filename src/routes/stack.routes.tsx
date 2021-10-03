import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { CarDetails } from "../screens/CarDetails";
import { Sheduling } from "../screens/Sheduling";
import { ShedulingDetails } from "../screens/ShedulingDetails";
import { ShedulingComplete } from "../screens/ShedulingComplete";
import { MyCars } from "../screens/MyCars";

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Sheduling" component={Sheduling} />
      <Screen name="ShedulingDetails" component={ShedulingDetails} />
      <Screen name="ShedulingComplete" component={ShedulingComplete} />
      <Screen name="MyCars" component={MyCars} />
    </Navigator>
  );
}
