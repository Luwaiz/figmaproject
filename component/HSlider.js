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

const HSlider = () => {
    const [Percentage, setPercentage] = useState(
        "Get 50% off on these new menus"
      );
  return (
    <View style={styles.hSliderCont}>
    <Text>{Percentage}</Text>
    <View style={styles.hSlider}>
      <Image
        source={require("../assets/pancake.jpg")}
        style={styles.Imagery}
        resizeMode="cover"
      /><Text style={styles.Txt}>Blueberry {"\n"}pancakes</Text>
    </View>
    <Text style={styles.categoryTxt}>Categories</Text>
  </View>
  )
}

const styles = StyleSheet.create({
    hSliderCont: {
        marginTop: 35,
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
        marginTop:5,
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
      categoryTxt:{
        paddingTop:10,
        fontWeight:"bold",
        fontSize:25
      },
})
export default HSlider

