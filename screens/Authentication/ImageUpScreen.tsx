import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import defcolor from "../../constants/defcolor";
import * as ImagePicker from "expo-image-picker";

const ImageUpScreen = () => {
  const [image, setImage] = useState("");
  const navigation = useNavigation();
  const [name, setName] = useState("");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const onPress = () => {
    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }
    // console.warn("Button pressed");
    navigation.navigate("Done");
  };
  return (
    <KeyboardAvoidingView style={styles.page}>
      {!image ? (
        <View style={styles.layout}>
          <Ionicons name="md-image-outline" size={50} color="white" />
          {/* <Text style={styles.clip}>P</Text> */}
        </View>
      ) : (
        <Image source={{ uri: image }} style={styles.image} />
      )}
      <Pressable style={styles.circle} onPress={pickImage}>
        {/* <Text style={styles.add}>+</Text> */}
        <Ionicons
          name="ios-add-sharp"
          size={20}
          color="black"
          style={styles.add}
        />
      </Pressable>
      <View style={{ marginTop: 15 }}>
        <Text style={styles.text1}>Here we go!</Text>
      </View>
      <View style={{ marginTop: 8, width: "100%" }}>
        <Text style={styles.text2}>Please provide your name and</Text>
        <Text style={styles.text2}>an optional profile photo</Text>
      </View>

      <TextInput
        style={styles.text3}
        placeholder="Username"
        underlineColorAndroid="grey"
        autoFocus={true}
        type="flat"
        selectionColor="grey"
        value={name}
        onChangeText={(value) => setName(value)}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.text4} elevation={5}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ImageUpScreen;

const styles = StyleSheet.create({
  page: {
    margin: "10%",
    // flex: 1,
  },
  layout: {
    height: 90,
    width: 90,
    backgroundColor: defcolor,
    borderRadius: 45,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.6,
    marginTop: "20%",
  },
  image: {
    height: 90,
    width: 90,
    backgroundColor: defcolor,
    borderRadius: 45,
    alignItems: "center",
    justifyContent: "center",
    // opacity: 0.4,
    marginTop: "20%",
  },
  clip: {
    fontSize: 50,
    color: "white",
    fontWeight: "bold",
    fontFamily: "PingFangHK-Light",
  },
  circle: {
    marginLeft: 60,
    marginTop: 125,
    backgroundColor: defcolor,
    justifyContent: "center",
    alignItems: "center",
    height: 25,
    width: 25,
    borderRadius: 12.5,
    position: "absolute",
    borderWidth: 1,
    borderColor: "white",
  },
  add: {
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    // fontSize: 20,
    fontWeight: "bold",
    // flex: 1,
  },
  text1: {
    fontSize: 40,
    // letterSpacing: 2,
    fontWeight: "bold",
  },
  text2: {
    // lineHeight: 20,
    fontSize: 12,
    letterSpacing: 1,
    color: "grey",
  },
  text3: {
    textDecorationColor: "red",
    marginTop: "30%",
    color: "black",
    height: 50,
    fontSize: 20,
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: "50%",
  },
  button: {
    position: "relative",
    backgroundColor: defcolor,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    height: 40,
    width: 320,
  },
  text4: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
