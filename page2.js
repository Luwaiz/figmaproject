import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity, Alert } from 'react-native';
import React from 'react';


export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.circle1}></View>
     <View style={styles.mainbody}>
      <Text style={styles.text1}>Easy payment</Text>
      <Text style={styles.text2}>Make your payments straight from your phone
</Text>
<Text style={styles.text2}>or just by scanning our QR code</Text>

<TouchableOpacity style={styles.button}>
  <Text style={styles.buttontxt}>Next</Text>
</TouchableOpacity>

</View>
<View style={styles.circle2}></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  text1:{
    color: "blue",
    fontWeight: "700",
    paddingBottom: 16,
    fontSize: 20,
    position:"relative",

  },
  text2:{
    color: "black",
    fontWeight: "300",
    //paddingTop: 20,
    position:"relative",
    },
    circle1:{
      backgroundColor: "blue",
      height: 327,
      width: 321,
      borderRadius: 200, 
      position: 'absolute',
      top:40,
      left:-220,
    },
    circle2:{
      backgroundColor: "blue",
      height: 200,
      width: 200,
      borderRadius: 200, 
      position: 'absolute',
      bottom:190,
      right:-170,
    },
    mainbody:
    {
      justifyContent:"center",
      alignItems:"center",
      top:600
    },
    button:{
      backgroundColor: "blue",
      height:58,
      width:350,
      borderRadius:30,
      borderWidth:1,
      borderColor:"black"
    },
    buttontxt:{
      position:"absolute",
      //justifyContent:"center",
     // alignItems: "center",
      color:"white",
      paddingVertical:20,
      paddingHorizontal:155

    }
});
