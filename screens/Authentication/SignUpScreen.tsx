import { AntDesign, Fontisto, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useRef } from "react";
import PhoneInput from "react-native-phone-number-input";
import {
  Text,
  Pressable,
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
  useWindowDimensions,
  TextInput,
} from "react-native";
import defcolor from "../../constants/defcolor";
import { SafeAreaView } from "react-native-safe-area-context";

const AuthScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const phoneInput = useRef<PhoneInput>(null);
  const navigation = useNavigation();

  const onPress = () => {
    if (!email.trim()) {
      alert("Please enter Email");
      return;
    }
    if (!password.trim()) {
      alert("Please enter Password");
      return;
    }
    // console.warn("Button pressed");
    navigation.navigate("Confirm")
  };
  return (
    <KeyboardAvoidingView style={styles.page}>
      <View style={styles.layout}>
        <Ionicons
          name="chatbubble-outline"
          size={80}
          color= {defcolor}
          style={styles.icon}
        />
      </View>
      <View style={styles.layout2}>
        <Text style={styles.text1}>Welcome to Pingr</Text>
      </View>
      <View style={{ alignItems: "center", flex: 1 }}>
        <View style={styles.emailcontainer} elevation={10}>
          <AntDesign
            name="user"
            size={24}
            color="grey"
            style={{ marginHorizontal: 15 }}
          />
          <TextInput
            style={styles.email}
            value={email}
            onChangeText={(value) => setEmail(value)}
            underlineColorAndroid="transparent"
            placeholder="Email"
            autoFocus
          />
        </View>
        <View style={styles.passwordcontainer} elevation={10}>
          <Ionicons
            name="lock-closed-outline"
            size={24}
            color="grey"
            style={{ marginHorizontal: 15 }}
          />
          <TextInput
            style={styles.password}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.passwordcontainer} elevation={10}>
          <PhoneInput
            placeholder=" Enter your mobile number"
            ref={phoneInput}
            defaultValue={phoneNumber}
            defaultCode="IN"
            layout="second"
            onChangeText={(text) => {
              setPhoneNumber(text);
            }}
            disableArrowIcon={false}
            containerStyle={styles.phoneContainer}
            textContainerStyle={styles.textInput}
            textInputStyle={{ color: "grey", fontSize: 17 }}
            codeTextStyle={{ color: "grey", fontSize: 17 }}
            // withDarkTheme
            withShadow
            // autoFocus
          />
        </View>
        <Text style={styles.text4}>
          You will receive a verification code to this mobile number.
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text3} elevation={5}>Send Verification</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
export default AuthScreen;

const styles = StyleSheet.create({
  page: {
    paddingTop: "10%",
    paddingHorizontal: 20,
    backgroundColor: "white",
    flex: 1,
  },
  layout: {
    marginTop: "2%",
    justifyContent: "center",
  },
  layout2: {
    marginBottom: 15,
    // alignItems: "center",
    justifyContent: "center",
  },
  // icon: {
  //   marginLeft: 0,
  // },
  emailcontainer: {
    flexDirection: "row",
    shadowOpacity: 10,
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    backgroundColor: "white",
    borderRadius: 5,
  },
  passwordcontainer: {
    flexDirection: "row",
    shadowOpacity: 10,
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    backgroundColor: "white",
    borderRadius: 5,
  },
  phoneContainer: {
    shadowOpacity: 10,
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    backgroundColor: "white",
    borderRadius: 5,
  },
  textInput: {
    shadowOpacity: 10,
    borderRadius: 5,
    paddingVertical: 10,
  },
  email: {
    flex: 1,
    fontSize: 17,
    color: "grey",
  },
  password: {
    flex: 1,
    fontSize: 17,
    color: "grey",
  },

  phoneContainer2: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    height: 50,
    width: 250,
    borderWidth: 1,
    borderColor: defcolor,
    marginTop: 20,
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: "10%",
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
  text1: {
    color: defcolor,
    fontWeight: "bold",
    fontSize: 25,
  },
  text2: {
    color: "lightgrey",
    marginTop: 30,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey",
    paddingBottom: 8,
    letterSpacing: 1,
    fontSize: 20,
  },
  text3: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  text4: {
    marginTop: 5,
    fontWeight: "bold",
    color: "grey",
  },
});
