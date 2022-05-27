import React from "react";
import { View, StyleSheet, TouchableHighlight, Text } from "react-native";

import Icon from "./Icon";
import colors from "../config/colors";

function AccountItem({ title, iconName, iconColor, onPress }) {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.container}>
        <Icon
          name={iconName}
          size={45}
          backgroundColor={iconColor}
          iconColor="white"
        />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: "row",
    height: 65,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    marginLeft: 15,
  },
});

export default AccountItem;
