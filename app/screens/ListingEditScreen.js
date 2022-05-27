import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import CategoryPickerItem from "../components/CategoryPickerItem";
import Screen from "../components/Screen";

import { Form, FormField, FormPicker, SubmitButton } from "../components/forms";

const categories = [
  {
    label: "Furniture",
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    value: 1,
  },
  {
    label: "Clothing",
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    value: 2,
  },
  {
    label: "Cameras",
    backgroundColor: "#fed330",
    icon: "camera",
    value: 3,
  },
];

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
});

const initialValues = [
  {
    title: "",
    price: "",
    category: null,
    description: "",
  },
];

function ListingEditScreen(props) {
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField
          maxLength={255}
          autoCapitalize="words"
          autoCorrect={true}
          name="title"
          placeholder="Title"
        />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <FormPicker
          name="category"
          numberOfColumns={3}
          items={categories}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <FormField
          maxLength={255}
          multineline
          numberOfLines={3}
          autoCapitalize="none"
          autoCorrect={true}
          keyboardType="default"
          name="description"
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;
