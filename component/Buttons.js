import { StyleSheet, Text, View, TouchableOpacity,ActivityIndicator} from "react-native";
import React, { useState } from "react";

const Buttons = ({ width,Btn,onPress,disabled=false,loading=false, ...props }) => {

  return (
    <TouchableOpacity style={{ 
    height: 58,
    width,
    backgroundColor: "#470440",
    borderRadius: 30,
    borderWidth: 1,
    marginBottom:20,
    borderColor: "black",
    alignItems:"center",
    justifyContent:"center"
    }} onPress={onPress} disabled={disabled} {...props} >
    {loading?(<ActivityIndicator color={"white"} size={25}/>):(<Text style={styles.btnTxt}>{Btn}</Text>)}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
      btnTxt: {
        color: "white",
        paddingVertical: 18,
        alignSelf:"center"
      },
});
export default Buttons;
