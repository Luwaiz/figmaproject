import { StyleSheet, Text, View, TouchableOpacity, Image,ScrollView, ActivityIndicator,Dimensions,RefreshControl} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import Products from "../component/Products";
import BackBtn from "../component/BackBtn";
import axios from "axios";
import API from "../constant/API";
const {height,width}=Dimensions.get("screen")

const FoodPage = ({route}) => {
  const [loading,setLoading]=useState(false)
  const [reloading,setReloading]=useState(false)
  const [products,setProducts]=useState([])
  const [page,setPage]=useState(1)
  const {CatImage,CatName}=route.params;
  const navigation = useNavigation();
  const getProducts = async ()=>{
    setLoading(true)
    try{
      const response = await axios.get(API.product)
      //console.log(response?.data?.result)
      setPage(page+1)
      setProducts(response?.data?.result?.products)
    }
    catch(e){
      console.log(e)
      setLoading(false)
      setReloading(false)
    }
    finally{
      setLoading(false)
      setReloading(false)
    }
  }
  useEffect(()=>{
    getProducts()
  },[])
  return (
    <View style={styles.container}>
    {loading? (
      <View style={{marginTop:height/2}}>
        <ActivityIndicator style={{alignSelf:"center"}} size={"large"} color={"#470440"}/>
      </View>
    ):(
      <>
      <View style={styles.topContainer}>
        <BackBtn/>
      </View>
      <View>
        <Image
          style={styles.HeadImage}
          source={CatImage}
        />
        <View style={styles.ImageDescription}>
          <Text style={styles.ImageTxt}>{CatName}</Text>
        </View>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} contentContainerStyle={{ alignItems: "center" }}
        refreshControl={
          <RefreshControl
            refreshing={reloading}
            colors={["#470440"]}
            tintColor={"#470440"}
            onRefresh={() => {
              setReloading(true)
              getProducts();
            }}/>}>
       <View style={styles.row}>
       {products.map((item,index)=>(
        <View key={index.toString()}>
        <Products item={item}/>
        </View>
       ))}
        </View> 
      </ScrollView>
      </>
    )}
     
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.31)",
  },
  topContainer: {
    marginTop: 30,
    height: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 6,
  },
  HeadImage: {
    height: 180,
    width: 350,
    borderRadius: 20,
  },
  ImageDescription: {
    alignItems: "center",
    maxWidth: 300,
    paddingHorizontal:10,
    backgroundColor: "white",
    alignSelf: "center",
    height: 40,
    justifyContent: "center",
    borderRadius: 16,
    borderWidth: 1.5,
    marginTop: -20,
    marginBottom:40
  },
  ImageTxt: {
    fontSize: 28,
    fontWeight: "400",
  },
  row:{
    justifyContent:"center",
  flexDirection:"row",
  flexWrap:"wrap",
  
  }
});
export default FoodPage;
