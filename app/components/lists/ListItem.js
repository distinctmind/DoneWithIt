import React from "react";
import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";

import defaultStyles from "../../config/styles";
import AppText from "../AppText";

function ListItem({
  image,
  title,
  subtitle,
  showChevrons,
  IconComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        underlayColor={defaultStyles.colors.light}
        onPress={onPress}
      >
        <View style={styles.container}>
          {IconComponent}
          {image && <Image source={image} style={styles.image} />}
          <View style={styles.textContainer}>
            <AppText numberOfLines={1} style={styles.title}>
              {title}
            </AppText>
            {subtitle && (
              <AppText numberOfLines={2} style={styles.subtitle}>
                {subtitle}
              </AppText>
            )}
          </View>
          {showChevrons && (
            <MaterialCommunityIcons
              name="chevron-right"
              size={20}
              color={defaultStyles.colors.grey}
            />
          )}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 75,
    width: 75,
    borderRadius: 50,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: defaultStyles.colors.white,
    padding: 15,
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "center",
    padding: 10,
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "500",
    color: defaultStyles.colors.grey,
    marginVertical: 5,
  },
});

export default ListItem;
