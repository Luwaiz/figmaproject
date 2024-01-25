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

const Login = ({navigation,route}) => {
  const NavigateToLandingPage = () => {
    if((Username1===Username2)&&(Password===Password2)){
    navigation.navigate("LandingPage",{Username1});}
        else{
            alert("Incorrect Password or username")
        } 
  };
  const { Username1, Email, Password } = route.params;
  const [Username2, setUsername2] = useState("");
  const [Password2, setPassword2] = useState("");
  const [Spacer2, setSpacer2] = useState({ bottom: 70, right: -150 });
  const [Spacer3, setSpacer3] = useState({ bottom: -210, left: -140 });
  return (
    <View style={styles.container}>
      <View style={styles.Circle1}>
        <Text>Sign up</Text>
      </View>
      <View style={styles.mainBody}>
        <View>
          <Text></Text>
        </View>
        <View style={styles.pace}>
          <TextInput
            style={styles.input1}
            placeholder="Username"
            placeholderTextColor={"#635D5D"}
            cursorColor={"#635D5D"}
            onChangeText={(text)=>setUsername2(text)}
          ></TextInput>
        </View>
        <View style={styles.pace}>
          <TextInput
            style={styles.input1}
            placeholder="Password"
            placeholderTextColor={"#635D5D"}
            cursorColor={"#635D5D"}
            onChangeText={(text)=>setPassword2(text)}
          ></TextInput>
        </View>
        <Text style={styles.dont}>
          Don't have an account?
          <Text style={styles.login}> Log in</Text>
        </Text>
        <TouchableOpacity style={styles.button} onPress={NavigateToLandingPage}>
          <Text style={styles.btnTxt}>Log in</Text>
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
  },
  pace: {
    paddingBottom: 30,
    zIndex: 2,
  },
  dont: {
    paddingTop: 140,
  },
  mainBody: {
    top: -170,
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
    bottom: -125,
  },
  btnTxt: {
    position: "absolute",
    //justifyContent:"center",
    // alignItems: "center",
    color: "white",
    paddingVertical: 18,
    paddingHorizontal: 75,
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
export default Login;
