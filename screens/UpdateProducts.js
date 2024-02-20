import { Keyboard, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Context from "../hooks/provider";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import API from "../constant/API";
import Buttons from "../component/Buttons";
import AdminPage from "./AdminPage";
import BackBtn from "../component/BackBtn";
import Products from "../component/Products";

const UpdateProducts = ({route}) => {
  const navigation = useNavigation();
  const context = useContext(Context);
  const {fromProductPage,fromAdminPage}=route.params
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [price, setPrice] = useState("");
  const [productId, setProductId] = useState(products);

  if (fromProductPage){
    console.log("true")
    //const{name}=route.params
  }else if(fromAdminPage){
    console.log("false")
  }
  
  const config = {
    headers: {
      Authorization: `Bearer ${context.token}`,
    },
  };

   const getProducts = async () => {
     setLoading(true);
     try {
       const response = await axios.get(API.product);
       console.log(response?.data?.result?.products);
       setProducts(response?.data?.result?.products);
     } catch (e) {
       console.log(e);
       setLoading(false);
     } finally {
       setLoading(false);
     }
   };
   useEffect(() => {
     getProducts();
   }, []);



  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <BackBtn />
      </View>

      {/* //getting the id from the api
      {products.map((item,index)=>(
        <View key={index.toString()}>
          <View><Text>{(index +1).toString()}</Text><Text>{item.id}</Text></View>
        </View>
        
      ))} */}
        
      <View style={{ marginTop: 20 }}>
      <View style={styles.cont}>
          <Text style={styles.texts}>Product Id</Text>
          <View style={styles.textBox}>
            <TextInput
              cursorColor={"#635D5D"}
              placeholder="enter"
              onChangeText={(text) => setProductId(text)}
            />
          </View>
        </View>
        <View style={styles.cont}>
          <Text style={styles.texts}>Product Name</Text>
          <View style={styles.textBox}>
            <TextInput
              cursorColor={"#635D5D"}
              placeholder="enter"
              onChangeText={(text) => setProductName(text)}
            />
          </View>
        </View>
        <View style={styles.cont}>
          <Text style={styles.texts}>Product price</Text>
          <View style={styles.textBox}>
            <TextInput
              cursorColor={"#635D5D"}
              placeholder="enter"
              onChangeText={(text) => setPrice(text)}
            />
          </View>
        </View>
        <View style={styles.cont}>
          <Text style={styles.texts}>Product description</Text>
          <View style={styles.textBox}>
            <TextInput
              cursorColor={"#635D5D"}
              placeholder="enter"
              onChangeText={(text) => setProductDescription(text)}
              multiline={true}
              style={{ minHeight: 30 }}
            />
          </View>
        </View>
      </View>

      <Buttons
        Btn={"Update product"}
        loading={loading}
        width={250}
        onPress={getProducts}
      />
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
    marginTop: 30,
    height: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 6,
  },
  cont: {
    width: 350,
    //alignItems: "center",
    marginVertical: 10,
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  texts: {
    fontSize: 16,
    // marginRight:20
  },
  textBox: {
    marginTop: 10,
    width: 350,
    borderWidth: 1,
    borderColor: "#470440",
    borderRadius: 10,
    minHeight: 50,
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});

export default UpdateProducts;
