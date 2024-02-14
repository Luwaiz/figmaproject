import { StyleSheet, Text, View, TouchableOpacity, Image,ScrollView} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import Products from "../component/Products";

const FoodPage = ({route}) => {

  const {CatImage,CatName}=route.params;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back-circle-outline" size={40} color="black" />
        </TouchableOpacity>
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
      <ScrollView>
       <View style={{ flexDirection: "row" }}>
          <Products />
          <Products />
         </View>
        <View style={{ flexDirection: "row" }}>
          <Products />
          <Products />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Products />
          <Products />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Products />
          <Products /> 
        </View> 
      </ScrollView>
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
    marginTop: 40,
    height: 50,
    width: "100%",
    //backgroundColor:"red",
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
    marginBottom:50
  },
  ImageTxt: {
    fontSize: 28,
    fontWeight: "400",
  },
});
export default FoodPage;
