import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import React from "react";

const VSlider = () => {
  const navigation=useNavigation();
  const NavigateToFoodPage = () => {
    navigation.navigate("FoodPage");
  };
  return (
    <View style={styles.VSliderCont}>
      <View style={styles.VSlider}>
        <Image
          source={require("../assets/Ice-cream.jpg")}
          style={styles.Imaging}
          resizeMode="cover"
        />
        <View style={styles.description}>
          <Text style={styles.descriptionTxt}>Desserts</Text>
          <TouchableOpacity onPress={NavigateToFoodPage}>
            <Ionicons
              name="chevron-forward-circle-sharp"
              size={36}
              color="#470440"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  VSlider: {
    height: 270,
    width: 350,
  },
  VSliderCont: {
    borderRadius: 20,
    marginBottom: 15,
  },
  Imaging: {
    height: 270,
    width: 350,
    borderRadius: 20,
  },
  description: {
    height: 65,
    backgroundColor: "rgba(217, 217, 217, 0.52)",
    bottom: 65,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  descriptionTxt: {
    fontWeight: "bold",
    fontSize: 25,
  },
});
export default VSlider;