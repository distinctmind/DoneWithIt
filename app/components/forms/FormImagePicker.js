import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import ImageInputList from "../ImageInputList";

function FormImagePicker({ name }) {
  const { setFieldValue, values, errors, touched } = useFormikContext();

  const imageUris = values[name];

  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleReplace = (newUri, oldUri) => {
    var oldImageIdx = imageUris.indexOf(oldUri);
    imageUris[oldImageIdx] = newUri;
    setFieldValue(name, imageUris);
  };

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri !== uri)
    );
  };
  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        replaceImage={handleRemove}
        onAddImage={handleAdd}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormImagePicker;
