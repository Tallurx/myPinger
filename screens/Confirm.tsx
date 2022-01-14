import { Entypo, Ionicons } from "@expo/vector-icons";
import React, { Component, useRef, useState } from "react";
import {
  View,
  Pressable,
  Text,
  TextInput,
  StyleSheet,
  Linking,
} from "react-native";
import defcolor from "../constants/defcolor";
import CountDown from "react-native-countdown-component";
// import phoneNumber from "./Authentication/SignUpScreen";
import { useNavigation } from "@react-navigation/native";

export default function ConfirmScreen() {
  const navigation = useNavigation();
  const phone = "+1 (971) 319-0636";
  // const phone = phoneNumber;
  const ref = useRef();
  const [pin, setPin] = useState({pin1: "", pin2: "", pin3: "", pin4: "", pin5: "", pin6: ""});
  // const value = e.target.value;
  const onPress = () => {
    navigation.navigate('Upload')
    console.log(pin)
  }

  return (
    <View style={{ flex: 0.6, alignItems: "center" }}>
      <View style={[styles.head, { marginTop: "15%" }]}>
        <Text
          style={{ flex: 1, fontSize: 24, color: defcolor, fontWeight: "bold" }}
        >
          Verify Your Phone Number
        </Text>
        <Entypo name="dots-three-vertical" size={24} color={defcolor} />
      </View>
      <Text style={{ alignItems: "center" }}>
        Waiting to automatically detect an SMS sent to
      </Text>
      <Text style={{ alignItems: "center", fontWeight: "bold" }}>{phone}</Text>
      <View
        style={{ flex: 0.6, justifyContent: "center", flexDirection: "row", marginTop: "13%"}}
      >
        <TextInput  maxLength={1} keyboardType="numeric" style={styles.input} value={pin.pin1} onChangeText={(value) => setPin({...pin, pin1: value})} />
        <TextInput  maxLength={1} keyboardType="numeric" style={styles.input} value={pin.pin2} onChangeText={(value) => setPin({...pin, pin2: value})} />
        <TextInput  maxLength={1} keyboardType="numeric" style={styles.input} value={pin.pin3} onChangeText={(value) => setPin({...pin, pin3: value})} />
        <TextInput  maxLength={1} keyboardType="numeric" style={styles.input} value={pin.pin4} onChangeText={(value) => setPin({...pin, pin4: value})} />
        <TextInput  maxLength={1} keyboardType="numeric" style={styles.input} value={pin.pin5} onChangeText={(value) => setPin({...pin, pin5: value})} />
        <TextInput  maxLength={1} keyboardType="numeric" style={styles.input} value={pin.pin6} onChangeText={(value) => setPin({...pin, pin6: value})} />
      </View>

      <View style={{ flexDirection: "row", marginVertical: "10%"}}>
        <Text style={{ fontSize: 15 }}>Enter 6-digit code.</Text>
        <Text
          onPress={() => Linking.openURL("http://google.com")}
          style={{ fontSize: 15, color: defcolor }}
        >
          {/* this is to add space btw code and wrong */}

          {" "}
          Wrong Number?
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "80%",
          justifyContent: "center",
          borderBottomWidth: 2,
          borderBottomColor: "lightgrey",
          paddingBottom: 8,
        }}
      >
        <Ionicons
          name="chatbox-ellipses"
          size={20}
          color="lightgrey"
          style={{ opacity: 1, marginRight: 10 }}
        />
        <Text
          style={{
            flex: 1,
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: 15,
          }}
        >
          Resend OTP
        </Text>
        <CountDown
          until={60}
          size={16}
          // onFinish={() => alert('Finished')}
          digitStyle={{ width: "auto", height: "auto" }}
          digitTxtStyle={{ color: "black", opacity: 0.6 }}
          timeToShow={["S"]}
          showSeparator={false}
          timeLabels={false}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "80%",
          justifyContent: "center",
          // paddingBottom: 8,
          marginVertical: "4%"
        }}
      >
        <Ionicons
          name="chatbox-ellipses"
          size={20}
          color={ defcolor}
          style={{ opacity: 0.6, marginRight: 10 }}
          // onPress={() =>}
        />
        <Text
          style={{
            flex: 1,
            color: defcolor,
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: 15,
          }}
        >
          Call me
        </Text>
      </View>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text3} elevation={5}>
          Confirm
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  head: {
    // alignItems: "center",
    marginLeft: "15%",
    marginBottom: "7%",
    paddingHorizontal: 5,
    flexDirection: "row",
  },
  input: {
    backgroundColor: "#e6e6e6",
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
    padding: 10,
    marginHorizontal: 10,
    fontSize: 20,
    height: 45,
    width: "10%",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "grey",
  },
  button: {
    backgroundColor: defcolor,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    height: 40,
    width: 320,
  },
  text3: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
