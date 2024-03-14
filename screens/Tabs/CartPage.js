import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  Button,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Buttons from "../../component/Buttons";
import CartItems from "../../component/CartItems";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import API from "../../constant/API";
import Context from "../../hooks/provider";

const CartPage = ({route}) => {
  const context=useContext(Context)
  const [loading,setLoading]=useState(false)
  const navigation = useNavigation();
  const {orderId}=route.params
  const id=orderId
  const [orders,setOrders]=useState([])


  const config = {
    headers: {
      Authorization: `Bearer ${context.token}`,
    },}

    const getOrders =async()=>{
      setLoading(true)
      try{
        const response= await axios.get(`${API.orderDetails}/${id}`,config)
      }
      catch(e){
        console.log(e)
        setLoading(false)
      }
      finally{
        setLoading(false)
      }
      
    }

    useEffect(()=>{
      getOrders()
      
    },[])

      const listOrders =async()=>{
        setLoading(true)
        try{
          const response= await axios.get(API.getOrder,config)
          console.log(response?.data?.result?.orders)
          setOrders(response?.data?.result?.orders)
        }
        catch(e){
          console.log(e)
          setLoading(false)
        }
        finally{
          setLoading(false)
        }
        
      }
  
      useEffect(()=>{
        listOrders()
      },[])

      const deleteOrders =async(itemId)=>{
        setLoading(true)
        try{
          const response= await axios.put(`${API.deleteOrder}/${itemId}/cancel`,config)
          console.log(response?.data)
        }
        catch(e){
          console.log(e)
          setLoading(false)
        }
        finally{
          setLoading(false)
        }
        
      }
  

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle-outline" size={40} color="black" />
        </TouchableOpacity>
      </View>
      <View>
      {orders?(<Text>present</Text>):(<Text>absent</Text>)}
        <View>
      {loading?(<ActivityIndicator color={"#470440"} size={"large"}/>):(
        
        <FlatList
        data={orders}
        renderItem={({item,index})=><CartItems item={item} index={index.toString()}/>}
      />
        )}
    </View>
        <View style={styles.checkout}>
          <View style={styles.checkout_summary}>
            <Text>Total checkout cost</Text>
            <Text>$238</Text>
          </View>
          <View style={styles.checkout_summary}>
            <Text>Delivery fee</Text>
            <Text>$78</Text>
          </View>
        </View>
      </View>
      <Buttons Btn={"Checkout"} width={200} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
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
  checkout: {
    alignItems: "center",
    width: 370,
    marginTop:30
  },
  checkout_summary: {
    width: 350,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    marginTop:10
  },
});

export default CartPage;
