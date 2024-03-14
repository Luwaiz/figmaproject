import { StatusBar } from "react-native";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  ScrollView,
  ActivityIndicator
} from "react-native";
import React, { useState } from "react";


const HSlider = ({PromoName,VImage,...props}) => {
  const [loading,setLoading]=useState(true)
  const hanleloading=()=>{
    setLoading(false)
  }
  return (
    <View style={styles.hSliderCont}>
    
    <View style={styles.hSlider}>
    {loading && <ActivityIndicator size="large" color="#470440" style={{alignSelf:"center"}}/>}

      <Image
        source={VImage}
        style={styles.Imagery}
        resizeMode="cover"
        onLoad={hanleloading}
        {...props}
      /><View style={{height:100, width:70}}><Text style={styles.Txt}>{PromoName}</Text></View>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
    hSliderCont: {
        marginTop: 4,
        marginHorizontal:20,
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

