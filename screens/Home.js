import { StatusBar } from "react-native";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import React, { useState } from "react";
import Buttons from "../component/Buttons";

const Home = ({ navigation }) => {
  const NavigateToNext1=()=>{
    navigation.navigate("Next1")
  }
  const [Header, setHeader] = useState("Order Food");
  const [Subtext1, setSubtext1] = useState(
    "Place your order for exquisite menus and mouth"
  );
  const [Subtext2, setSubtext2] = useState("watering dishes");
  //const [Imagery,setImagery]=useState(require("./assets/noodles.png"))
  const [Spacer1, setSpacer1] = useState({ top: 40, right: -220 });
  const [Spacer2, setSpacer2] = useState({ bottom: 190, left: -150 });
  return (
    <View style={styles.container}>
      <View style={[styles.circle1, { ...Spacer1 }]}></View>
      <View style={styles.topContainer}>
      </View>
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
      <Buttons Btn={"Next"} onPress={NavigateToNext1} width={350}/>
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
  topContainer: {
    marginTop: 30,
    height: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 6,
    alignItems: "center",
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
    top: 500,
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
});
export default Home;
