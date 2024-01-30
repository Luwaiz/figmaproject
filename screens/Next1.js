import { StatusBar } from "react-native";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import React, { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import Buttons from "../component/Buttons";

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
  const [Spacer2, setSpacer2] = useState({ bottom: 190, right: -150 });
  return (
    <View style={styles.container}>
      <View style={[styles.circle1, { ...Spacer1}]}></View>
      <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.backBtn}><Ionicons name="arrow-back-circle-outline" size={40} color="black" /></TouchableOpacity>
      <View style={styles.mainbody}>
        <Text style={styles.text1}>{Header}</Text>
        <Text style={styles.text2}>{Subtext1} </Text>
        <Text style={styles.text2}>{Subtext2}</Text>
        <View style={styles.widget}>
          <View style={styles.Widget1}></View>
          <View style={styles.widget2}></View>
          <View style={styles.widget3}></View>
        </View>
      </View>
      <Buttons Btn={"Next"} onPress={NavigateToNext2} width={350}/>
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
    top: 580,
  },
  widget: {
    paddingTop: 50,
    display: "flex",
    height: 20,
    width: 45,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Widget1: {
    height: 8,
    width: 8,
    backgroundColor: "grey",
    borderRadius: 15,
  },
  widget2: {
    height: 8,
    width: 22,
    backgroundColor: "#470440",
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
    marginTop:40,
    left:6
  }
});
export default Next1;
