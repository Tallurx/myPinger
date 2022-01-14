import { useState } from "react";
import { Platform, StyleSheet, Text, View} from "react-native";
import * as ImagePicker from "expo-image-picker";

const pickImage = async () => {
  const [image, setImage] = useState("");
  // No permissions request is necessary for launching the image library
  const result = await ImagePicker.launchCameraAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    // aspect: [4, 3],
    quality: 1,
  });

  console.log(result);

  if (!result.cancelled) {
    setImage(result.uri);
  }

  return (
    <View></View>
  )
};
export default pickImage;

