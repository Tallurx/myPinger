import React, { Component, useRef, useState } from "react";
import { View, Pressable, Text, TextInput, StyleSheet } from "react-native";
import defcolor from "../constants/defcolor";

export default function ConfirmScreen () {
    // const [pin, setPin] = useState(pin1: "", pin2: "", pin3: "", pin4: "", pin5: "", pin6: "",);

    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <View
          style={{ flex: 0.6, justifyContent: "center", flexDirection: "row" }}
        >
          <TextInput
            // ref={"pin1ref"}
            maxLength={1}
            keyboardType="numeric"
            // onChangeText={() => setPin(value)}
            // value={pin.pin1}
            style={styles.input}
          />
          <TextInput
            // ref={"pin2ref"}
            maxLength={1}
            keyboardType="numeric"
            // onChangeText={() => setPin(value)}
            // value={pin.pin2}
            style={styles.input}
          />
          <TextInput
            // ref={"pin3ref"}
            maxLength={1}
            keyboardType="numeric"
            // onChangeText={() => setPin(value)}
            // value={pin.pin3}
            style={styles.input}
          />
          <TextInput
            // ref={"pin4ref"}
            maxLength={1}
            keyboardType="numeric"
            // onChangeText={() => setPin(value)}
            // value={pin.pin4}
            style={styles.input}
          />
          <TextInput
            // ref={"pin5ref"}
            maxLength={1}
            keyboardType="numeric"
            // onChangeText={() => setPin(value)}
            // value={pin.pin5}
            style={styles.input}
          />
          <TextInput
            // ref={"pin6ref"}
            maxLength={1}
            keyboardType="numeric"
            // onChangeText={() => setPin(value)}
            // value={pin.pin6}
            style={styles.input}
          />
        </View>
        <Pressable style={styles.button}>
          <Text style={styles.text3} elevation={5}>
            Confirm
          </Text>
        </Pressable>
      </View>
    );
  }

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#e6e6e6",
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
    padding: 10,
    marginHorizontal: 10,
    fontSize: 20,
    height: 55,
    width: "10%",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "grey",
  },
  button: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    height: 50,
    width: 250,
  },
  text3: {
    color: defcolor,
    fontWeight: "bold",
    fontSize: 25,
  },
});
