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


const HSlider = ({PromoName,VImage,...props}) => {
  return (
    <View style={styles.hSliderCont}>
    
    <View style={styles.hSlider}>
      <Image
        source={VImage}
        style={styles.Imagery}
        resizeMode="cover"
        {...props}
      /><View style={{height:100, width:70}}><Text style={styles.Txt}>{PromoName}</Text></View>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
    hSliderCont: {
        marginTop: 4,
        marginHorizontal:16,
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

