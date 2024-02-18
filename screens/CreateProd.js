import { Keyboard, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Context from "../hooks/provider";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import API from "../constant/API";
import Buttons from "../component/Buttons";
import AdminPage from "./AdminPage";

const CreateProd = () => {
  const navigation=useNavigation()
  const context = useContext(Context);

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
      const response = await axios.post(API.product, req,config);
      console.log(response?.data?.result?.products);
      navigation.navigate("AdminPage",{price,productDescription,productName});
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
      <View style={{ marginTop: 100 }}>
        <View style={styles.cont}>
          <Text style={styles.texts}>Product Name</Text>
          <View style={styles.textBox}>
            <TextInput
              placeholder="enter"
              onChangeText={(text) => setProductName(text)}
            />
          </View>
        </View>
        <View style={styles.cont}>
          <Text style={styles.texts}>Product price</Text>
          <View style={styles.textBox}>
            <TextInput
              placeholder="enter"
              onChangeText={(text) => setPrice(text)}
            />
          </View>
        </View>
        <View style={styles.cont}>
          <Text style={styles.texts}>Product description</Text>
          <View style={styles.textBox}>
            <TextInput
              placeholder="enter"
              onChangeText={(text) => setProductDescription(text)}
            />
          </View>
        </View>
      </View>
      <Buttons Btn={"Create product"} loading={loading} width={250} onPress={NavigateToAdmin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  cont: {
    flexDirection: "row",
    width: 350,
    alignItems: "center",
    marginVertical: 10,
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  texts: {
    fontSize: 16,
    // marginRight:20
  },
  textBox: {
    width: 230,
    borderWidth: 1,
    borderColor: "#470440",
    borderRadius: 10,
    height: 40,
    justifyContent: "center",
    paddingHorizontal: 5,
  },
});

export default CreateProd;
