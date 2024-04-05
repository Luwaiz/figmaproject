import { Dimensions, StatusBar } from "react-native";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
const {width, height}=Dimensions.get("screen")

const TextInputBox = ({ secureTextEntry,keyboardType,onChangeText,placeholder,passwordRules,password,...props}) => {
  const [hidePassword, setHidePassword] = React.useState(!password);
  return (
    <View style={styles.inputBox}>
    <TextInput
      style={styles.input1}
      placeholder={placeholder}
      placeholderTextColor={"#635D5D"}
      cursorColor={"#635D5D"}
      onChangeText={onChangeText}
      {...props}
      keyboardType={keyboardType}
      secureTextEntry={!hidePassword}
      passwordRules={passwordRules}
    />
    {password && (<TouchableOpacity onPress={()=>{
      setHidePassword(!hidePassword)
    }}>{hidePassword?(<FontAwesome style={styles.icon} name="eye" size={24} color="black" />):(<FontAwesome style={styles.icon} name="eye-slash" size={24} color="black" />)}</TouchableOpacity>)}
    
  </View>
  )
}

const styles = StyleSheet.create({
    inputBox: {
        zIndex: 2,
        flexDirection:"row",
        alignItems:"center",
        borderWidth: 0.5,
        height: 50,
        width: width-30,
        paddingHorizontal: 20,
        borderRadius: 15,
        backgroundColor: "white",
        borderColor:"#969090",
        justifyContent:"space-between",
        marginBottom:30
      },
      input1: {
        width:"95%"
      },
})
export default TextInputBox

