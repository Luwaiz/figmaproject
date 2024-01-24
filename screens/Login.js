import { StatusBar } from "react-native";
import { StyleSheet,View,TouchableOpacity,Image,Text,TextInput} from "react-native";
import React,{useState} from "react";

const Login=({navigation})=>{
    
    const NavigateToLandingPage=()=>{
        navigation.navigate('LandingPage')
    }
    return(
    <View style={styles.container}>
        <View style={styles.Circle1}><Text>Sign up</Text></View>
        <View style={styles.mainbody}>
       <View style={styles.pace}><TextInput style={styles.input1} placeholder="Username" placeholderTextColor={"#635D5D"}></TextInput></View>
       <View style={styles.pace}><TextInput style={styles.input1} placeholder="Password" placeholderTextColor={"#635D5D"}></TextInput></View>
        <Text style={styles.dont}>Don't have an account?<Text style={styles.login}> Log in</Text></Text>
        <TouchableOpacity style={styles.button} onPress={NavigateToLandingPage}><Text style={styles.btntxt}>Log in</Text></TouchableOpacity>
        </View>
    </View>
)}
const styles=StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        
    },
    input1:{
        borderWidth: 0.5,
        height:50,
        width: 361,
        paddingHorizontal: 20,
        borderRadius:15,
    },
    Circle1:{

        backgroundColor: "#470440",
        height:393,
        width: 393,
        borderRadius:200,
        top:-300,
    },
    pace:{
        paddingBottom:20
    },
    dont:{
        paddingTop:140,
    
    },
    mainbody:{
        top:-150,
        alignItems:"center"
    },
    login:{
        color:"#470440"
    },
    button:{
        width:200,
        height:58,
        backgroundColor:"#470440",
        borderRadius:30,
        borderWidth:1,
        borderColor:"black",
        bottom:-125
    },
    btntxt:{
        position:"absolute",
        //justifyContent:"center",
       // alignItems: "center",
        color:"white",
        paddingVertical:18,
        paddingHorizontal:75
    }

});export default Login;