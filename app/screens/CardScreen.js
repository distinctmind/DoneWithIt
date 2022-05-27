import React from "react";
import { View, StyleSheet } from "react-native";

import Card from "./app/components/Card";

function CardScreen() {
  return (
    <View style={styles.cardBackground}>
      <Card
        title="Red jacket for sale!"
        subtitle="$100"
        image={require("./app/assets/jacket.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cardBackground: {
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 100,
  },
});

export default CardScreen;
