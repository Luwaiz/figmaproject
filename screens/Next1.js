import { StatusBar } from "react-native";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import React, { useState } from "react";
import { FontAwesome5 } from '@expo/vector-icons';

const Next1 = ({ navigation }) => {
  const NavigateToNext2 = () => {
    navigation.navigate("Next2");
  };
  const [Header, setHeader] = useState("Easy Payments");
  const [Subtext1, setSubtext1] = useState(
    "Make your payments straight from your phone"
  );
  const [Subtext2, setSubtext2] = useState("or just by scanning our QR code");
  // const [Imagery,setImagery]=useState(require("./assets/noodles.png"))
  const [Spacer1, setSpacer1] = useState({ top: 40, left: -220 });
  const [Spacer2, setSpacer2] = useState({ bottom: 190, right: -170 });
  return (
    <View style={styles.container}>
      <View style={[styles.circle1, { ...Spacer1}]}></View>
      <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.backBtn}><FontAwesome5 name="arrow-circle-left" size={44} color="white" /></TouchableOpacity>
      <View style={styles.mainbody}>
        <Text style={styles.text1}>{Header}</Text>
        <Text style={styles.text2}>{Subtext1} </Text>
        <Text style={styles.text2}>{Subtext2}</Text>
        <View style={styles.widget}>
          <View style={styles.Widget1}></View>
          <View style={styles.widget2}></View>
          <View style={styles.widget3}></View>
        </View>
        <TouchableOpacity style={styles.button} onPress={NavigateToNext2}>
          <Text style={styles.buttontxt}>Next</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.circle2, { ...Spacer2 }]}></View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    //justifyContent: 'center',
  },
  imagery: {
    width: 350,
    height: 350,
    top: 250,
  },
  text1: {
    color: "#470440",
    fontWeight: "700",
    paddingBottom: 16,
    fontSize: 20,
    position: "relative",
  },
  text2: {
    color: "black",
    fontWeight: "400",
    //paddingTop: 20,
    position: "relative",
  },
  circle1: {
    backgroundColor: "#470440",
    height: 327,
    width: 321,
    borderRadius: 200,
    position: "absolute",
  },
  circle2: {
    backgroundColor: "#470440",
    height: 200,
    width: 200,
    borderRadius: 200,
    position: "absolute",
  },
  mainbody: {
    justifyContent: "center",
    alignItems: "center",
    top: 530,
  },
  button: {
    backgroundColor: "#470440",
    height: 58,
    width: 350,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "black",
    bottom: -30,
  },
  buttontxt: {
    position: "absolute",
    //justifyContent:"center",
    // alignItems: "center",
    color: "white",
    paddingVertical: 18,
    paddingHorizontal: 155,
  },
  widget: {
    paddingTop: 20,
    display: "flex",
    height: 20,
    width: 45,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Widget1: {
    height: 8,
    width: 22,
    backgroundColor: "#470440",
    borderRadius: 15,
  },
  widget2: {
    height: 8,
    width: 8,
    backgroundColor: "grey",
    borderRadius: 15,
  },
  widget3: {
    height: 8,
    width: 8,
    backgroundColor: "grey",
    borderRadius: 15,
  },
  backBtn:{
    position: "absolute",
    top: 70,
    left:20
  }
});
export default Next1;
