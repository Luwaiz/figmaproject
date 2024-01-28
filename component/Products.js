import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Products = () => {
  return (
    <View style={styles.Product}>
          <Image
            style={styles.ProductImage}
            source={require("../assets/Ice-cream.jpg")}
          ></Image>
          <View style={styles.innerProduct}>
            <Text style={styles.productName}>Blueberry{"\n"}Pancakes</Text>
            <View style={{ alignItems: "center" }}>
              <View style={styles.price}>
                <Text style={{ color: "white", alignSelf: "center" }}>
                  $24.99
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: 70,
                }}
              >
                <Feather name="minus-circle" size={19} color="black" />
                <View style={styles.quantity}>
                  <Text style={{ color: "white" }}>1</Text>
                </View>
                <MaterialIcons
                  name="add-circle-outline"
                  size={20}
                  color="black"
                />
              </View>
            </View>
          </View>
        </View>
  )
}

const styles = StyleSheet.create({
    Product: {
    width: 170,
    height: 200,
    backgroundColor: "white",
    borderRadius: 20,
    marginTop: 20,
    marginHorizontal:10
  },
  innerProduct: {
    height: 80,
    width: 170,
    backgroundColor: "#D9D9D9",
    flexDirection: "row",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopWidth: 1,
    borderColor: "#470440",
    justifyContent: "space-around",
    paddingHorizontal: 5,
    paddingTop: 5,
  },
  ProductImage: {
    height: 110,
    width: 110,
    borderRadius: 60,
    marginVertical: 5,
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "#470440",
  },
  price: {
    height: 24,
    width: 60,
    backgroundColor: "#470440",
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 10,
  },
  productName: {
    paddingTop: 15,
  },
  quantity: {
    borderColor: "black",
    borderWidth: 2,
    backgroundColor: "#470440",
    borderRadius: 30,
    height: 24,
    width: 24,
    justifyContent: "center",
    alignItems: "center",
    bottom: 2,
  },
})
export default Products
