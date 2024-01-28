import { StatusBar } from "react-native";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
} from "react-native";
import TextInputBox from "../component/TextInputBox";
import Buttons from "../component/Buttons";
import React, { useState } from "react";

const Login = ({ navigation, route, }) => {
  const NavigateToLandingPage = () => {
    if (Username1 === Username2 && Password === Password2) {
      navigation.navigate("LandingPage", { Username1 });
    }
     else if (Username2 === '' && Password2 === '') {
       //navigation.goBack;
       alert("Fill in your details");
     } 
    else {
      alert("Incorrect Password or Username");
    }
  };
  const { Username1, Email, Password,Btn="Log in" } = route.params;
  const [Password2, setPassword2] = useState("");
  const [Username2, setUsername2] = useState("");
  const [Spacer2, setSpacer2] = useState({ bottom: 170, right: -150 });
  const [Spacer3, setSpacer3] = useState({ bottom: -90, left: -120 });
  return (
    <View style={styles.container}>
      <View style={styles.Circle1}>
        <Text style={styles.LogInTxt}>Log in</Text>
      </View>
      <View style={styles.mainBody}>
        <TextInputBox
          placeholder="Username"
          onChangeText={(text) => setUsername2(text)}
          keyboardType="default"
        />
        <TextInputBox
          placeholder="Password"
          onChangeText={(text) => setPassword2(text)}
          keyboardType="default"
          secureTextEntry
        />
        <Text style={styles.FgtPassword}>Forgot password?</Text>
        <Text style={styles.accTxt1}>
          Don't have an account?
          <Text style={styles.accTxt2}> Sign up</Text>
        </Text>
        
      </View>
      <Buttons onPress={NavigateToLandingPage} Btn="Log in" width={200}/>
      <View style={[styles.circle2, { ...Spacer2 }]}></View>
      <View style={[styles.circle3, { ...Spacer3 }]}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  Circle1: {
    backgroundColor: "#470440",
    height: 440,
    width: 440,
    borderRadius: 600,
    top: -200,
  },
  accTxt1: {
    marginTop:140
  },
  mainBody: {
    marginTop: -150,
    alignItems: "center",
  },
  accTxt2: {
    color: "#470440",
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
  LogInTxt: {
    fontSize: 50,
    color: "white",
    textAlign:"center",
    bottom:-330
  },
  FgtPassword:{
    marginRight:-230,
    marginTop:-15
  }
});
export default Login;
