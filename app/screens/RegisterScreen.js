import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import ActivityIndicator from "../components/ActivityIndicator";
import useAuth from "../auth/useAuth";
import useApi from "../hooks/useApi";
import Screen from "../components/Screen";
import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../components/forms";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen(props) {
  const { storeUser, register, registerError } = useAuth();
  const registerApi = useApi(register);

  const handleRegister = async (registerInfo) => {
    const result = await registerApi.request(registerInfo);
    storeUser(result.data);
  };

  return (
    <>
      <ActivityIndicator visible={registerApi.loading} />
      <Screen style={styles.container}>
        <Form
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleRegister}
          validationSchema={validationSchema}
        >
          <ErrorMessage
            visible={registerError}
            error="A user with the given email already exists."
          />
          <FormField
            autoCapitalize="words"
            autoCorrect={false}
            icon="account"
            keyboardType="default"
            name="name"
            placeholder="Name"
            textContentType="name"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Register" />
        </Form>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
