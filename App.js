import React, { useCallback, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { LogBox, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";

import authStorage from "./app/auth/storage";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import OfflineNotice from "./app/components/OfflineNotice";
import navigationTheme from "./app/navigation/navigationTheme";
import { navigationRef } from "./app/navigation/rootNavigation";

export default function App() {
  LogBox.ignoreLogs([
    "exported from 'deprecated-react-native-prop-types'.",
    "ViewPropTypes will be removed",
  ]);

  const [user, setUser] = useState();
  const [appIsReady, setAppIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  useEffect(() => {
    const prepare = async () => {
      try {
        console.log("going to display splash screen");
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        await restoreUser();
      } catch (e) {
        console.log(e);
      } finally {
        console.log("done restoring user, now going to set app is ready");
        setAppIsReady(true);
      }
    };
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    console.log("in layout root view, about to hide splash screen");
    if (appIsReady) await SplashScreen.hideAsync();
  }, [appIsReady]);

  if (!appIsReady) return null;

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <AuthContext.Provider value={{ user, setUser }}>
        <OfflineNotice />
        <NavigationContainer ref={navigationRef} theme={navigationTheme}>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </AuthContext.Provider>
    </View>
  );
}
