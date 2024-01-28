import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const Buttons = ({ width,Btn,onPress, ...props }) => {
  return (
    <TouchableOpacity style={{ position:"absolute",
    height: 58,
    width,
    backgroundColor: "#470440",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "black",
    bottom:20
    }} onPress={onPress} {...props}>
      <Text style={styles.btnTxt}>{Btn}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
      btnTxt: {
        position: "absolute",
        color: "white",
        paddingVertical: 18,
        alignSelf:"center"
      },
});
export default Buttons;
