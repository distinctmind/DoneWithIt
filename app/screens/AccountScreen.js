import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Icon from "../components/Icon";
import ListItem from "../components/lists/ListItem";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import Screen from "../components/Screen";
import colors from "../config/colors";

const acountItems = [
  {
    title: "My Listings",
    iconName: "format-list-bulleted",
    iconColor: colors.primary,
  },
  {
    title: "My Messages",
    iconName: "email",
    iconColor: colors.secondary,
  },
];

function AccountScreen(props) {
  return (
    <View style={styles.container}>
      <Screen>
        <View style={styles.userDetails}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Mosh Hamedani"
            subtitle="programmingwithmosh@gmail.com"
          />
        </View>
        <View style={styles.mainArea}>
          <FlatList
            data={acountItems}
            keyExtractor={(acountItem) => acountItem.title}
            renderItem={({ item }) => (
              <ListItem
                title={item.title}
                IconComponent={
                  <Icon
                    name={item.iconName}
                    size={45}
                    backgroundColor={item.iconColor}
                    iconColor="white"
                  />
                }
                onPress={() => console.log("pressed account item", item)}
              />
            )}
            ItemSeparatorComponent={ListItemSeparator}
          />
        </View>
        <View style={styles.logoutArea}>
          <ListItem
            title="Log Out"
            IconComponent={
              <Icon
                name="logout"
                size={45}
                backgroundColor="#ffe66d"
                iconColor="white"
              />
            }
            onPress={() => console.log("pressed account item")}
          />
        </View>
      </Screen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  userDetails: {
    marginVertical: 15,
  },
  mainArea: {
    marginTop: 15,
    marginBottom: 5,
  },
  logoutArea: {
    marginTop: 15,
  },
});

export default AccountScreen;
