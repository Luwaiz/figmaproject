import { StatusBar } from "react-native";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  ScrollView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from "react";
import VSlider from "../component/vslider";
import HSlider from "../component/HSlider";

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
          <Image
            style={styles.profile}
            source={require("../assets/pancake.jpg")}
          ></Image>
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
      <Text style={styles.Percent}>{Percentage}</Text>
      <ScrollView horizontal={true} >
        <HSlider />
        <HSlider />
        <HSlider />
      </ScrollView>
      <View style={styles.categoryCont}><Text style={styles.categoryTxt}>Categories</Text></View>
      <ScrollView>
        <VSlider />
        <VSlider />
        <VSlider />
        <VSlider />
      </ScrollView>
      <View style={styles.Taskbar}>
      <Ionicons name="person-sharp" size={24} color="white" />
      <Fontisto name="search" size={24} color="white" />
      <MaterialCommunityIcons name="home-outline" size={35} color="white" />
      <FontAwesome5 name="shopping-cart" size={23} color="white" />
      <Foundation name="list" size={25} color="white" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
  },
  heading: {
    marginTop: 40,
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
    borderColor: "#470440",
    borderWidth: 3,
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
    marginTop: 10,
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
    right: 15,
  },
  categoryTxt:{
    fontWeight:"bold",
    fontSize:25,
  },
  categoryCont:{
    paddingVertical:15,
    paddingRight:240
  },
  Percent:{
    paddingTop:40,
    marginLeft:-140
  },
  Taskbar:{
    width:380,
    height:54,
    backgroundColor:"#470440",
    position:"absolute",
    bottom:3,
    borderRadius:24,
    flexDirection:"row",
    justifyContent:"space-around",
    alignContent:"center",
    alignItems:"center"
  }
});
export default LandingPage;
