import { StatusBar } from "react-native";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import React, { useState } from "react";

const LandingPage = ({ route }) => {
  const { Username1 } = route.params;
  const [Percentage, setPercentage] = useState(
    "Get 50% off on these new menus"
  );
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headText}>Welcome, {Username1}!</Text>
        <View style={styles.profNotify}>
          <Ionicons
            name="notifications"
            size={24}
            color="#470440"
            style={styles.notify}
          />
          <View style={styles.profile}></View>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.search}
          placeholder="Search"
          placeholderTextColor={"#635D5D"}
          cursorColor={"#635D5D"}
        />
        <Fontisto
          name="search"
          size={24}
          color="#470440"
          style={styles.searchIcon}
        />
      </View>
      <View style={styles.hSliderCont}>
        <Text>{Percentage}</Text>
        <View style={styles.hSlider}>
          <Image
            source={require("../assets/pancake.jpg")}
            style={styles.Imagery}
            resizeMode="cover"
          /><Text style={styles.Txt}>Blueberry {"\n"}pancakes</Text>
        </View>
      </View>
      <View><Text>Categories</Text><View><View style={styles.hSliderCont}>
        <Text>{Percentage}</Text>
        <View style={styles.hSlider}>
          <Image
            source={require("../assets/pancake.jpg")}
            style={styles.Imagery}
            resizeMode="cover"
          /><Text style={styles.Txt}>Blueberry {"\n"}pancakes</Text>
        </View>
      </View></View></View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection:"column"
  },
  heading: {
    // backgroundColor:"blue",
    top: 40,
    width: "100%",
    height: 50,
    paddingHorizontal: 16,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headText: {
    fontSize: 25,
    fontWeight: "bold",
    top: 10,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#470440",
  },
  profNotify: {
    flexDirection: "row",
  },
  notify: {
    top: 15,
    paddingRight: 5,
  },
  inputContainer: {
    flexDirection: "row",
    top: 50,
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    borderRadius: 25,
    borderColor: "#969090",
    borderWidth: 1,
  },
  search: {
    width: 350,
    height: 50,
    paddingLeft: 16,
  },
  searchIcon: {
    position: "absolute",
    right:15
  },
  hSliderCont: {
    top: 90,
  },
  Imagery: {
    height:100,
    width:276,
    borderTopRightRadius:50,
    borderBottomRightRadius:50,
    borderBottomLeftRadius:16,
    borderTopLeftRadius:16,
    borderWidth:2,
    borderColor:"black"
  },
  hSlider:{
    borderRadius:16,
    backgroundColor:"#470440",
    marginTop:5,
    flexDirection:"row",
    height:100,
    width:350,
  },
  Txt:{
    marginLeft:5,
    color:"white",
    marginVertical:30
  }
});
export default LandingPage;
