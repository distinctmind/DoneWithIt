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
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
];

function AccountScreen({ navigation }) {
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
                    name={item.icon.name}
                    size={45}
                    backgroundColor={item.icon.backgroundColor}
                    iconColor="white"
                  />
                }
                onPress={() => {
                  navigation.navigate(item.targetScreen);
                }}
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
