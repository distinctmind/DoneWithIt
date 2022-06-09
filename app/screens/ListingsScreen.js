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
import { ErrorMessage } from "../components/forms";

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
    <>
      <ActivityIndicator visible={loading} />
      <Screen style={styles.container}>
        {error && (
          <View style={styles.errorContainer}>
            <ErrorMessage
              error="Couldn't retrieve the listings."
              visible={true}
            />
            <Button title="Retry" onPress={() => loadListings()} />
          </View>
        )}
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
    </>
  );
}

const styles = StyleSheet.create({
  padding: {
    margin: 30,
  },
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  errorContainer: {
    alignItems: "center",
  },
  list: {
    padding: 20,
  },
  listing: {
    marginVertical: 5,
  },
});

export default ListingsScreen;
