import React from "react";
import { StyleSheet, View, Image } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

function Card({ image, title, subtitle }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} resizeMode={"cover"} />
      <View style={styles.detailsContainer}>
        <AppText numberOfLines={1} style={styles.title}>
          {title}
        </AppText>
        <AppText numberOfLines={2} style={styles.subtitle}>
          {subtitle}
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 10,
    height: 250,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    heigth: 200,
    flex: 2,
  },
});

export default Card;
