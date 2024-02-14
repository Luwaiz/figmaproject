import {
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    Text,
    Button,
    ScrollView,
    FlatList,
  } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const CartPage = (route) => {
  const navigation =useNavigation()
  //const {totalQuantity,price}=route.params
  return (
    <View style={styles.container}>
    <View style={styles.topContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle-outline" size={40} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ fontSize: 20, color: "#470440" }}>Edit</Text>
        </TouchableOpacity>
      </View>
        <View style={styles.CartItem}>
        <View style={{flexDirection:"row",marginTop:5,justifyContent:"space-between"}}>
            <Image style={styles.itemPic}source={require("../assets/blue-pancake.jpg")}/>
            <View style={{width:200,backgroundColor:""}}>
            <View >
                <View style={{flexDirection:'row',justifyContent:"space-between", width:250}}><Text>Quantity</Text><Text>7</Text></View>
                <View style={{flexDirection:'row',justifyContent:"space-between", width:250}}><Text>Cost of 1 serving</Text><Text>4</Text></View>
                <View style={{flexDirection:'row',justifyContent:"space-between", width:250}}><Text>Total cost</Text><Text>3</Text></View>
            </View>
            <TouchableOpacity style={{width:300}}><Text>Drop item</Text></TouchableOpacity>
            </View>
        </View>
            <View><Text>Blueberry</Text></View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        backgroundColor:"white"
    },
    itemPic:{
        width:100,
        height:110
    },
    CartItem:{
        backgroundColor:"red",
        
       justifyContent:"space-between",
        marginHorizontal:20,
        width:370
    },
    topContainer: {
        marginTop: 40,
        height: 50,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 6,
        alignItems: "center",
      },
})

export default CartPage

