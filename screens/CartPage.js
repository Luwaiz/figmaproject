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
import Buttons from "../component/Buttons";
import React from "react";
import CartItems from "../component/CartItems";
import { useNavigation } from "@react-navigation/native";

const CartPage = (route) => {
  const navigation = useNavigation();
  const {item,productId}=route.params||{};

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle-outline" size={40} color="black" />
        </TouchableOpacity>
      </View>
      <View>
        <CartItems item={item}/>
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
