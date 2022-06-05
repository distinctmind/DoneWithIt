import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import AppText from "../components/AppText";
import Button from "../components/Button";
import Card from "../components/Card";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {
  const {
    data: listings,
    error,
    loading,
    request: loadListings,
  } = useApi(listingsApi.getListings);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.container}>
      {error && (
        <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <Button title="Retry" onPress={() => loadListings()} />
        </>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        style={styles.list}
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.listing}>
            <Card
              title={item.title}
              subtitle={"$" + item.price}
              imageUrl={item.images[0].url}
              onPress={() => {
                navigation.navigate(routes.LISTING_DETAILS, item);
              }}
              thumbnailUrl={item.images[0].thumbnailUrl}
            />
          </View>
        )}
      ></FlatList>
    </Screen>
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
