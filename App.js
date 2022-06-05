import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { LogBox } from "react-native";

import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import OfflineNotice from "./app/components/OfflineNotice";

export default function App() {
  LogBox.ignoreLogs([
    "exported from 'deprecated-react-native-prop-types'.",
    "ViewPropTypes will be removed",
  ]);
  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}
