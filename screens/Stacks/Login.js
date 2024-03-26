import { Dimensions, StatusBar } from "react-native";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  Keyboard
} from "react-native";
import TextInputBox from "../../component/TextInputBox";
import Buttons from "../../component/Buttons";
import { FontAwesome } from '@expo/vector-icons';
import React, { useState, useContext } from "react";
import axios from "axios";
import API from "../../constant/API";
import Context, { contexter } from "../../hooks/provider";
const {width,height}=Dimensions.get("screen")

const Login = ({ navigation}) => {
  const context=contexter()
  const [loading, setLoading] = useState(false);
  
  const NavigateToLandingPage = async() => {
    Keyboard.dismiss()
    setLoading(true)
    try{
      const req = {
        email:Username2.trim(),
        password:Password2
      }
    

      const response= await axios.post(API.log_in, req)
      console.log(response?.data?.result)
      context.setEmail(response?.data?.result?.user?.email)
      context.setToken(response?.data?.result?.access_token)
      if(context.setToken===""){
        context.setLoggedIn(false)
      }else{
        context.setLoggedIn(true)
        navigation.navigate("HomePage",{
          screen:"Landing",
          initial:true,params:{
            screen:"LandingPage"}}
            );
      }
    }catch(e){
      console.log(e)
      alert("Sign up failed: " + e.message)
      setLoading(false)
    }finally{
      setLoading(false)
    }
  };
  
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
          placeholder="Email"
          onChangeText={(text) => setUsername2(text)}
          keyboardType="default"
        />
        
        <View style={{alignItems:"center"}}>
          <TextInputBox
            placeholder="Password"
            onChangeText={(text) => setPassword2(text)}
            keyboardType="default"
            password={true}
            />
          </View>
        <Text style={styles.FgtPassword}>Forgot password?</Text>
        <Text style={styles.accTxt1}>
          Don't have an account?
          <Text style={styles.accTxt2} onPress={()=> {
            navigation.navigate("Signup")
          }}> Sign up</Text>
        </Text>
        
      </View>
      <Buttons onPress={NavigateToLandingPage} Btn="Log in" 
      disabled={loading || Username2 === "" ||
      Password2 === "" 
      }
        loading={loading}
        width={200}/>
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
  accTxt1: {
    marginTop:140
  },
  mainBody: {
    flex:1,
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
    fontFamily:"Lato",
    fontWeight:"600"
  },
  FgtPassword:{
    marginLeft:"auto",
    marginTop:-15
  }
});
export default Login;
