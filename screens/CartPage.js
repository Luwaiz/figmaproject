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

const CartPage = ({navigation}) => {
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
        <View style={{flexDirection:"row",paddingHorizontal:"20"}}>
            <Image style={styles.itemPic}source={require("../assets/blue-pancake.jpg")}/>
            <View  style={{paddingLeft:10}}>
            <View >
                <View><Text style={{flexDirection:'row',justifyContent:"space-between"}} >Quantity</Text><Text>1</Text></View>
                <View><Text>Cost of 1 serving</Text><Text>2</Text></View>
                <View><Text>Total cost</Text><Text>3</Text></View>
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
        backgroundColor:"rgba(255, 255, 255, 0.31)"
    },
    itemPic:{
        width:100,
        height:110
    },
    CartItem:{
        backgroundColor:"red",
        //width:"300",
        paddingHorizontal:40,
        alignItems:"center",
        marginHorizontal:20
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

