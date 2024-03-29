import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import React, { useState } from "react";
const {width,height}=Dimensions.get("screen")

const VSlider = ({ CatName, CatImage, ...props }) => {
  const [loading, setLoading] = useState(true);
  const hanleloading = () => {
    setLoading(false);
  };
  const navigation = useNavigation();
  const NavigateToFoodPage = () => {
    navigation.navigate("FoodPage", { CatImage, CatName });
  };

  return (
    <View style={styles.VSliderCont}>
      <TouchableOpacity onPress={NavigateToFoodPage}>
        <View style={styles.VSlider}>
          {loading && (
            <ActivityIndicator
              size="large"
              color="#470440"
              style={{ alignSelf: "center", justifyContent: "center" }}
            />
          )}
          <Image
            source={CatImage}
            style={styles.Imaging}
            resizeMode="cover"
            {...props}
            onLoad={hanleloading}
          />
          <View style={styles.description}>
            <Text style={styles.descriptionTxt}>{CatName}</Text>

            <Ionicons
              name="chevron-forward-circle-sharp"
              size={36}
              color="#470440"
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  VSlider: {
    height: 270,
    width: width-26,
  },
  VSliderCont: {
    borderRadius: 20,
    marginBottom: 15,
  },
  Imaging: {
    height: 270,
    width: width-26,
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
