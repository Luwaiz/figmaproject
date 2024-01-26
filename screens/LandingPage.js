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
import React, { useState } from "react";
import VSlider from "../component/vslider";
import HSlider from "../component/HSlider";

const LandingPage = ({ route }) => {
  const { Username1 } = route.params;
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
      <View>
        <HSlider />
      </View>
      <ScrollView>
        <VSlider />
        <VSlider />
        <VSlider />
        <VSlider />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
});
export default LandingPage;
