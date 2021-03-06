import React from "react";
import { View, Text, ImageBackground, Image, StyleSheet } from "react-native";
import Button from "../components/Button";

import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
      resizeMode="cover"
      blurRadius={10}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.heroText}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="login"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <Button
          title="register"
          onPress={() => navigation.navigate(routes.REGISTER)}
          color="secondary"
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignSelf: "center",
    alignItems: "center",
  },
  heroText: {
    margin: 15,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
