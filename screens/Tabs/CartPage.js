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
import Context, { contexter } from "../../hooks/provider";

const Bottom = () => {
  return (
    <View style={styles.checkout}>
      <View style={styles.checkout_summary}>
        <Text>Total checkout cost</Text>
        <Text>$238</Text>
      </View>
      <View style={styles.checkout_summary}>
        <Text>Delivery fee</Text>
        <Text>$78</Text>
      </View>
      <TouchableOpacity
        style={styles.btn}
      >
        <Text style={{ color: "white", fontSize: 18 }}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const CartPage = () => {
  const context = contexter();
  const [loading, setLoading] = useState(false);
  const id = context.orderId;

  const config = {
    headers: {
      Authorization: `Bearer ${context.token}`,
    },
  };

  const getOrders = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API.orderDetails}/${id}`, config);
      //console.log(response?.data)
      
    } catch (e) {
      console.log(e);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getOrders();
  }, [id]);

  const listOrders = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API.getOrder, config);
      //console.log(response?.data?.result)
      context?.setOrders(response?.data?.result?.orders);
    } catch (e) {
      console.log(e);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    listOrders();
  }, [id]);

  const deleteOrders = async (itemId) => {
    setLoading(true);
    try {
      const response = await axios.put(
        `${API.deleteOrder}/${itemId}/cancel`,
        config
      );
      console.log(response?.data);
    } catch (e) {
      console.log(e);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 40 }}>
        {loading ? (
          <ActivityIndicator color={"#470440"} size={"large"} />
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            ListFooterComponent={Bottom}
            data={context?.orders}
            renderItem={({ item, index }) => (
              <CartItems item={item} index={index.toString()} />
            )}
          />
        )}
      </View>
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
    marginTop: 30,
  },
  checkout_summary: {
    width: 350,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    marginTop: 10,
  },
  btn:{
    height: 50,
    width: 200,
    backgroundColor: "#470440",
    justifyContent: "center",
    borderRadius: 30,
    borderColor: "black",
    borderWidth: 1,
    alignItems: "center",
    marginTop: 16,
    marginBottom:20
  }
});

export default CartPage;
