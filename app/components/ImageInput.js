import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import defaultStyles from "../config/styles";

function ImageInput({ imageUri, onChangeImage }) {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library.");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) {
        onChangeImage(result.uri, imageUri);
      }
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => selectImage()}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            name={"camera"}
            size={30}
            color={defaultStyles.colors.grey}
          />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    height: 75,
    width: 75,
    overflow: "hidden",
  },
});

export default ImageInput;
