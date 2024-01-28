import { StyleSheet, Text, View, TouchableOpacity, Image,ScrollView} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import Products from "../component/Products";

const FoodPage = () => {
  const navigation = useNavigation();
  const [Favorite, setFavorite] = useState("favorite-outline");
  const [FavoriteColor, setNotFavoriteColor] = useState("black");
  const handleFavorite = () => {
    setFavorite(
      Favorite === "favorite-outline" ? "favorite" : "favorite-outline"
    );
    setNotFavoriteColor(FavoriteColor === "black" ? "red" : "black");
  };
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBtn}
        >
          <Ionicons name="arrow-back-circle-outline" size={40} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleFavorite}>
          <MaterialIcons
            name={Favorite}
            size={30}
            color={FavoriteColor}
            style={styles.FavoriteIcon}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Image
          style={styles.HeadImage}
          source={require("../assets/Ice-cream.jpg")}
        />
        <View style={styles.ImageDescription}>
          <Text style={styles.ImageTxt}>Desserts</Text>
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
  FavoriteIcon: {
    paddingTop: 5,
  },
  HeadImage: {
    height: 180,
    width: 350,
    borderRadius: 20,
  },
  ImageDescription: {
    alignItems: "center",
    width: 150,
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
