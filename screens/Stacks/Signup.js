import { Dimensions, Keyboard, StatusBar } from "react-native";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
} from "react-native";
import TextInputBox from "../../component/TextInputBox";
import React, { useState } from "react";
import Buttons from "../../component/Buttons";
import axios from "axios";
import API from "../../constant/API";
const {width,height}=Dimensions.get("screen")

const Signup = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [Spacer2, setSpacer2] = useState({ bottom: 170, right: -150 });
  const [Spacer3, setSpacer3] = useState({ bottom: -90, left: -120 });
  const [Email, setEmail] = useState("");
  const [Username1, setUsername1] = useState("");
  const [Password, setPassword] = useState("");
  const [ConPassword, setConPassword] = useState("");

  const NavigateToLogin = async () => {
    const req = {
      email:Email.toLowerCase(),
      password:ConPassword
    }
    Keyboard.dismiss()
    setLoading(true)
    try{
      // const response=await createUserWithEmailAndPassword(auth,Email,ConPassword)
      // console.log(response)
      // navigation.navigate("Login", { Email, Username1, ConPassword });
      
      const response= await axios.post(API.register, req)
      console.log(response?.data?.result?.user)
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
          password={true}
        />
        <TextInputBox
          placeholder="Confirm Password"
          onChangeText={(text) => setConPassword(text)}
          keyboardType="default"
          password={true}
        />
        <Text style={styles.accTxt1}>
          Already have an account?
         <Text style={styles.accTxt2} onPress={()=> {
          navigation.navigate("Login");
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
    height:height/4,
    width: width,
    borderBottomLeftRadius:300,
    borderBottomRightRadius:300,
    justifyContent:"center",
    alignItems:"center",
    marginBottom:50
  },
  mainBody: {
    flex:1,
    alignItems: "center",
  },
  signUpTxt: {
    fontSize: 50,
    color: "white",
    fontFamily:"Lato",
    fontWeight:"600"
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
