import { Keyboard, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Context, { contexter } from "../../hooks/provider";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import API from "../../constant/API";
import Buttons from "../../component/Buttons";
import BackBtn from "../../component/BackBtn";

const CreateProd = () => {
  const navigation=useNavigation()
  const context = contexter()

  const [loading, setLoading] = useState(false);
  const [profiles, setProfiles] = useState([]);
  const config = {
    headers: {
      Authorization: `Bearer ${context.token}`,
    },
  };
  const NavigateToAdmin = async () => {
    const req = {
      name: productName,
      price: parseFloat(price),
      description: productDescription,
    };
    Keyboard.dismiss()
    setLoading(true);
    try {
      const response = await axios.post(API.createProduct, req,config);
      console.log(response?.data?.result?.products);
      navigation.navigate("AdminPage");
    } catch (e) {
      console.log(e);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [price, setPrice] = useState("");
  return (
    <View style={styles.container}>
    <View style={styles.topContainer}>
    <BackBtn/>
    </View>
    
      <View style={{ marginTop: 20 }}>
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
            keyboardType="numeric"
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
              style={{minHeight:30}}
            />
          </View>
        </View>
      </View>
      <Buttons Btn={"Create product"} loading={loading} width={250} onPress={NavigateToAdmin}
        disabled={loading || price==="" || productDescription==="" || productName ===""}
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
    marginTop:10,
    width: 350,
    borderWidth: 1,
    borderColor: "#470440",
    borderRadius: 10,
    minHeight: 50,
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical:10
  },
});

export default CreateProd;
