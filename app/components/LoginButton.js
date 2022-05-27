import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function LoginButton() {
  return (
    <TouchableOpacity style={styles.loginButton}>
      <Text style={styles.loginButtonText}>LOGIN</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  loginButton: {
    width: "80%",
    height: 45,
    marginTop: 25,
    backgroundColor: colors.primary,
    color: "#fff",
    justifyContent: "center",
    borderRadius: 20,
  },
  loginButtonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
});

export default LoginButton;
