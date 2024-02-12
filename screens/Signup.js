import { Keyboard, StatusBar } from "react-native";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
} from "react-native";
import TextInputBox from "../component/TextInputBox";
import React, { useState } from "react";
import Buttons from "../component/Buttons";
import { auths } from "../hooks/firbaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import axios from "axios";
import API from "../constant/API";

const Signup = ({ navigation }) => {
  const auth=auths;
  const [loading, setLoading] = useState(false);
  const [Spacer2, setSpacer2] = useState({ bottom: 170, right: -150 });
  const [Spacer3, setSpacer3] = useState({ bottom: -90, left: -120 });
  const [Email, setEmail] = useState("");
  const [Username1, setUsername1] = useState("");
  const [Password, setPassword] = useState("");
  const [ConPassword, setConPassword] = useState("");
  const NavigateToLogin = async () => {
    // if (Password === ConPassword) {
    //   navigation.navigate("Login", { Email, Username1, Password });
    // } else if (
    //   Email === "" ||
    //   Password === "" ||
    //   Username1 === "" ||
    //   ConPassword === ""
    // ) {
    //   //navigation.goBack
    //   alert("Fill in your details");
    // } else {
    //   alert("Password confirmation invalid");
    // }

    const req = {
      email:Email,
      password:ConPassword
    }
    Keyboard.dismiss()
    setLoading(true)
    try{
      // const response=await createUserWithEmailAndPassword(auth,Email,ConPassword)
      // console.log(response)
      // navigation.navigate("Login", { Email, Username1, ConPassword });
      
      const response= await axios.post(API.register, req)
      console.log(response.data.result.user)
      navigation.navigate("Login", { Email, Username1, ConPassword });
    }catch(e){
      console.log(e)
      alert("Sign up failed: " + e.message)
      setLoading(false)
    }finally{
      setLoading(false)
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.Circle1}>
        <Text style={styles.signUpTxt}>Sign up</Text>
      </View>
      <View style={styles.mainBody}>
        <TextInputBox
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />
        <TextInputBox
          placeholder="Username"
          onChangeText={(text) => setUsername1(text)}
          keyboardType="default"
        />
        <TextInputBox
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          keyboardType="default"
          secureTextEntry
        />
        <TextInputBox
          placeholder="Confirm Password"
          onChangeText={(text) => setConPassword(text)}
          keyboardType="default"
          secureTextEntry
        />
        <Text style={styles.accTxt1}>
          Already have an account?
         <Text style={styles.accTxt2} onPress={()=> {
          navigation.navigate("Login", { Email, Username1, Password });
         }}> Log in</Text>
        </Text>
      </View>
      <Buttons
        onPress={NavigateToLogin}
        Btn="Sign up"
        disabled={loading || Email === "" ||
      Password === "" ||
      Username1 === "" ||
      ConPassword === "" || Password !== ConPassword}
        loading={loading}
        width={200}
      />
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
    //zIndex: 3,
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
    color: "white",
    paddingVertical: 18,
    paddingHorizontal: 75,
  },
  signUpTxt: {
    fontSize: 50,
    color: "white",
    textAlign: "center",
    bottom: -330,
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
  accTxt2: {
    color: "#470440",
  },
});
export default Signup;
