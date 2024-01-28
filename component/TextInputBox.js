import { StatusBar } from "react-native";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
} from "react-native";
import React, { useState } from "react";

const TextInputBox = ({ secureTextEntry,keyboardType,onChangeText,placeholder,passwordRules,...props}) => {
  return (
    <View style={styles.pace}>
    <TextInput
      style={styles.input1}
      placeholder={placeholder}
      placeholderTextColor={"#635D5D"}
      cursorColor={"#635D5D"}
      onChangeText={onChangeText}
      {...props}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      passwordRules={passwordRules}
    ></TextInput>
  </View>
  )
}

const styles = StyleSheet.create({
    pace: {
        paddingBottom: 30,
        zIndex: 2,
      },
      input1: {
        borderWidth: 0.5,
        height: 55,
        width: 361,
        paddingHorizontal: 20,
        borderRadius: 15,
        backgroundColor: "white",
        borderColor:"#969090"
      },
})
export default TextInputBox

