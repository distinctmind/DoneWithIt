import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import Icon from "./Icon";
import AppText from "./AppText";

function CategoryPickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View>
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={80}
        ></Icon>
        <AppText style={styles.label}>{item.label}</AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});

export default CategoryPickerItem;
