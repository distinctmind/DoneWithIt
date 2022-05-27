import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1000,
    image: require("../assets/couch.jpg"),
  },
];

function ListingsScreen(props) {
  return (
    <View style={styles.container}>
      <Screen>
        <FlatList
          style={styles.list}
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.listing}>
              <Card
                image={item.image}
                title={item.title}
                subtitle={"$" + item.price}
              />
            </View>
          )}
        ></FlatList>
      </Screen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  list: {
    padding: 20,
  },
  listing: {
    marginVertical: 5,
  },
});

export default ListingsScreen;
