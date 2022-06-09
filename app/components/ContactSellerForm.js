import React from "react";
import { Alert, Keyboard } from "react-native";
import * as Notifications from "expo-notifications";
import * as Yup from "yup";

import { Form, FormField, SubmitButton } from "../components/forms";
import messagesApi from "../api/messages";

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(1).label("Message"),
});

function ContactSellerForm({ listing }) {
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();
    const result = messagesApi.send(listing.id, message);

    if (!result?.ok) {
      console.log("Error", result);
      return Alert.alert("Error", "Could not send message to user");
    }
    resetForm();

    // Notifications.setNotificationHandler({
    //   handleNotification: async () => {
    //     return {};
    //   },
    // });

    Notifications.scheduleNotificationAsync({
      content: {
        title: "Awesome",
        body: "Your message was sent to the seller.",
      },
    });
  };

  return (
    <Form
      initialValues={{ message: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <FormField
        maxLength={255}
        multineline
        numberOfLines={3}
        autoCapitalize="none"
        autoCorrect={true}
        keyboardType="default"
        name="message"
        placeholder="Message"
      />
      <SubmitButton title="Contact Seller" />
    </Form>
  );
}

export default ContactSellerForm;
