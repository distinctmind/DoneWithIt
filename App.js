import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { LogBox } from "react-native";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
  LogBox.ignoreLogs([
    "exported from 'deprecated-react-native-prop-types'.",
    "ViewPropTypes will be removed",
  ]);
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
