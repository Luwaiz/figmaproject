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
import React from "react";
import CartItems from "../component/CartItems";
import { useNavigation } from "@react-navigation/native";

const CartPage = (route) => {
  const navigation = useNavigation();
  //const {totalQuantity,price}=route.params
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle-outline" size={40} color="black" />
        </TouchableOpacity>
      </View>
      <CartItems></CartItems>
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
});

export default CartPage;
