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

const Signup = ({ navigation }) => {
const NavigateToLogin = () => {
    if(Password===ConPassword){
    navigation.navigate("Login", {Email,Username1,Password,ConPassword});
  ;}else{
    alert("Password confirmation invalid")
  }}
  const [Spacer2, setSpacer2] = useState({ bottom: 70, right: -150 });
  const [Spacer3, setSpacer3] = useState({ bottom: -210, left: -140 });
  const [Email, setEmail] = useState("");
  const [Username1, setUsername1] = useState("");
  const [Password, setPassword] = useState("");
  const [ConPassword, setConPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.Circle1}>
        <Text style={styles.signUpTxt}>Sign up</Text>
      </View>
      <View style={styles.mainBody}>
        <View style={styles.pace}>
          <TextInput
            style={styles.input1}
            placeholder="Email"
            placeholderTextColor={"#635D5D"}
            cursorColor={"#635D5D"}
            onChangeText={(text) => setEmail(text)}
          ></TextInput>
        </View>
        <View style={styles.pace}>
          <TextInput
            style={styles.input1}
            placeholder="Username"
            placeholderTextColor={"#635D5D"}
            cursorColor={"#635D5D"}
            onChangeText={(text) => setUsername1(text)}
          ></TextInput>
        </View>
        <View style={styles.pace}>
          <TextInput
            style={styles.input1}
            placeholder="Password"
            placeholderTextColor={"#635D5D"}
            cursorColor={"#635D5D"}
            onChangeText={(text)=>setPassword(text)}
          ></TextInput>
        </View>
        <View style={styles.pace}>
          <TextInput
            style={styles.input1}
            placeholder="Confirm Password"
            placeholderTextColor={"#635D5D"}
            onChangeText={(text)=>setConPassword(text)}
          ></TextInput>
        </View>
        <TouchableOpacity style={styles.button} onPress={NavigateToLogin}>
          <Text style={styles.btnTxt}>Sign up</Text>
        </TouchableOpacity>
        <View style={[styles.circle2, { ...Spacer2 }]}></View>
        <View style={[styles.circle3, { ...Spacer3 }]}></View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  input1: {
    borderWidth: 0.5,
    height: 55,
    width: 361,
    paddingHorizontal: 20,
    borderRadius: 15,
    backgroundColor: "white",
    borderColor:"#969090"
  },
  Circle1: {
    backgroundColor: "#470440",
    height: 440,
    width: 440,
    borderRadius: 600,
    top: -200,
    zIndex: 3,
  },
  pace: {
    paddingBottom: 30,
    zIndex: 2,
  },
  dont: {
    paddingTop: 40,
  },
  mainBody: {
    top: -140,
    alignItems: "center",
  },
  login: {
    color: "#470440",
  },
  button: {
    width: 200,
    height: 58,
    backgroundColor: "#470440",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "black",
    bottom: -50,
  },
  btnTxt: {
    position: "absolute",
    //justifyContent:"center",
    // alignItems: "center",
    color: "white",
    paddingVertical: 18,
    paddingHorizontal: 75,
  },
  signUpTxt: {
    alignItems: "center",
    fontSize: 30,
    color: "red",
    zIndex: 4,
    justifyContent: "center",
  },
  circle2: {
    backgroundColor: "#470440",
    height: 200,
    width: 200,
    borderRadius: 200,
    position: "absolute",
    zIndex: 1,
  },
  circle3: {
    backgroundColor: "#470440",
    height: 200,
    width: 200,
    borderRadius: 200,
    position: "absolute",
  },
});
export default Signup;
