import { StyleSheet, Text, View, TouchableOpacity, Image,ActivityIndicator } from "react-native";
import React, { useState,useEffect } from "react";
import { useNavigation } from "@react-navigation/native";


const Products = ({item}) => {
  const navigation=useNavigation()
  const [loading,setLoading]=useState(false)
  const [productImage,setProductImage]= useState(require("../assets/images/close-up-delicious-chocolate-cupcakes-with-raspberry.jpg"))
  const NavigateToItems =()=>{
    navigation.navigate("Items",{productImage,item})
  }
  

  return (

    <View>
    {loading? (
      <View style={{alignItems:"center",justifyContent:"center"}}>
      <ActivityIndicator size={"large"} color={"#470440"}/>
      </View>
    ):(
      <TouchableOpacity onPress={NavigateToItems}>
    <View style={styles.Product}>
        <Image
            style={styles.ProductImagery}
            source={productImage}
          ></Image>
          <View style={styles.innerProduct}>
            <Text style={styles.productName}>{item.name}</Text>
          </View>
          </View>
    
    </TouchableOpacity>
        
    )}

    </View>
    );};
  


const styles = StyleSheet.create({
    Product: {
    width: 170,
    height: 200,
    justifyContent:"space-between",
    backgroundColor: "white",
    borderRadius: 20,
    marginTop: 20,
    marginHorizontal:10
  },
  innerProduct: {
    height: 40,
    width: 170,
    backgroundColor: "#D9D9D9",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopWidth: 1,
    borderColor: "#470440",
    alignItems:"center",
    
  },
  ProductImagery: {
    height: 140,
    width: 140,
    borderRadius: 80,
    marginTop: 5,
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "#470440",
  },
  productName: {
    paddingTop: 15,
    height:200
  },
})
export default Products

