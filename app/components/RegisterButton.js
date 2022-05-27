import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function RegisterButton() {
  return (
    <TouchableOpacity style={styles.registerButton}>
      <Text style={styles.registerButtonText}>REGISTER</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  registerButton: {
    width: "80%",
    height: 45,
    marginBottom: 35,
    marginTop: 20,
    backgroundColor: colors.secondary,
    color: "#fff",
    justifyContent: "center",
    borderRadius: 20,
  },
  registerButtonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
});

export default RegisterButton;
