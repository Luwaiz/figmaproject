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

const CartItems = ({route,item,productId}) => {
 // const {item,productImag}=route.params
 
  return (
    <View>
        <View style={styles.CartItem}>
        <View style={styles.cartSpecs}>
            <Image style={styles.itemPic} source={require("../assets/images/close-up-delicious-chocolate-cupcakes-with-raspberry.jpg")}/>
            <View style={{width:245,backgroundColor:"white",alignItems:"center",paddingVertical:5}}>
            <View >
                <View style={[styles.itemSum,{borderBottomWidth:0.5,borderTopWidth:0}]}><Text>Quantity</Text><Text>{props.item?.name}</Text></View>
                <View style={styles.itemSum}><Text>Cost of 1 serving</Text><Text>{props.item?.price}</Text></View>
                <View style={[styles.itemSum,{borderBottomWidth:0,borderTopWidth:0.5}]}><Text>Total cost</Text><Text>3</Text></View>
            </View>
            <TouchableOpacity style={styles.dropBtn}><Text style={{color:"white"}}>Drop item</Text></TouchableOpacity>
            </View>
        </View>
            <View style={styles.itemName}><Text>Blueberry</Text></View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    itemPic:{
        width:110,
        height:130
    },
    CartItem:{
        backgroundColor:"#898A8D",
        borderWidth:1,
        borderRadius:5,
        justifyContent:"space-between",
        width:370
    },
    
    itemSum:{
      flexDirection:'row',
      paddingHorizontal:5,
      paddingVertical:2,
      justifyContent:"space-between",
      width:240,
      marginVertical:2,
      borderBottomWidth:0.5,
      borderTopWidth:0.5
    },
    dropBtn:{
      width:200,
      height:30,
      borderRadius:5,
      alignItems:"center",
      backgroundColor:"#470440",
      marginTop: 5,
      justifyContent:"center",
      borderWidth:1
    },
    itemName:{
      backgroundColor:"white",
      marginVertical:5,
      marginHorizontal:5,
      paddingLeft:10,
      height:30,
      justifyContent:"center"
    },
    cartSpecs:{
      flexDirection:"row",
      marginTop:5,
      paddingHorizontal:5,
      width:370,
      justifyContent:"space-between"
    }
})
export default CartItems

