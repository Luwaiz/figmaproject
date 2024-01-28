import { StatusBar } from "react-native";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  ScrollView
} from "react-native";
import React, { useState } from "react";


const HSlider = () => {
  return (
    <View style={styles.hSliderCont}>
    
    <View style={styles.hSlider}>
      <Image
        source={require("../assets/pancake.jpg")}
        style={styles.Imagery}
        resizeMode="cover"
      /><Text style={styles.Txt}>Blueberry {"\n"}pancakes</Text>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
    hSliderCont: {
        marginTop: 4,
        marginHorizontal:16,
        marginBottom:80
      },
      Imagery: {
        height:100,
        width:276,
        borderTopRightRadius:50,
        borderBottomRightRadius:50,
        borderBottomLeftRadius:16,
        borderTopLeftRadius:16,
        borderWidth:2,
        borderColor:"black"
      },
      hSlider:{
        borderRadius:16,
        backgroundColor:"#470440",
        flexDirection:"row",
        height:100,
        width:350,
        marginBottom:20
      },
      Txt:{
        marginLeft:5,
        color:"white",
        marginVertical:30
      },
     
})
export default HSlider

